import csv
import os
import json
import glob

print("脚本开始执行...")

# 定义数据目录和输出目录
pdb_data_dir = 'pdb_data'
pdb_pages_dir = 'pdb_pages'
pdb_list_js_file = 'pdb_list.js'

# 创建输出目录（如果不存在）
if not os.path.exists(pdb_pages_dir):
    os.makedirs(pdb_pages_dir)

pdb_data_list = []

def extract_pdb_data(json_path):
    """从JSON文件中提取PDB数据"""
    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except (json.JSONDecodeError, FileNotFoundError):
        print(f"警告：无法读取或解析JSON文件: {json_path}")
        return None

    entry = (data.get('data') or {}).get('entry')
    if not entry:
        return None

    pdb_id = entry.get('rcsb_id')
    if not pdb_id:
        # 从文件名中获取PDB ID作为备选
        pdb_id = os.path.basename(json_path).replace('.json', '')

    # 实验方法
    method = 'N/A'
    exptl_list = entry.get('exptl')
    if exptl_list:
        method = exptl_list[0].get('method', 'N/A')

    # 分辨率
    resolution = None
    refine_list = entry.get('refine')
    if method == 'X-RAY DIFFRACTION' and refine_list and refine_list[0].get('ls_d_res_high'):
        resolution = f"{refine_list[0]['ls_d_res_high']:.2f} Å"
    
    em_3d_list = entry.get('em_3d_reconstruction')
    if method in ['ELECTRON MICROSCOPY', 'ELECTRON CRYSTALLOGRAPHY'] and em_3d_list and em_3d_list[0].get('resolution'):
        resolution = f"{em_3d_list[0]['resolution']:.2f} Å"

    # R-Factors
    r_factors = None
    if refine_list:
        refine_info = refine_list[0]
        r_work = refine_info.get('ls_R_factor_R_work')
        r_free = refine_info.get('ls_R_factor_R_free')
        if r_work is not None and r_free is not None:
            r_factors = f"R-work: {r_work:.3f}, R-free: {r_free:.3f}"

    # 发布日期
    rcsb_accession_info = entry.get('rcsb_accession_info') or {}
    date = (rcsb_accession_info.get('initial_release_date') or '').split('T')[0] or None

    # Entry Info
    entry_info_data = entry.get('rcsb_entry_info') or {}
    molecular_weight = entry_info_data.get('molecular_weight')
    if molecular_weight:
        molecular_weight = f"{molecular_weight:.2f} kDa"

    entity_counts = {
        'protein': entry_info_data.get('polymer_entity_count_protein'),
        'na': entry_info_data.get('polymer_entity_count_nucleic_acid'),
        'na_hybrid': entry_info_data.get('polymer_entity_count_nucleic_acid_hybrid')
    }
    entity_counts_str_parts = []
    if entity_counts['protein'] is not None:
        entity_counts_str_parts.append(f"蛋白质: {entity_counts['protein']}")
    if entity_counts['na'] is not None:
        entity_counts_str_parts.append(f"核酸: {entity_counts['na']}")
    if entity_counts['na_hybrid'] is not None:
        entity_counts_str_parts.append(f"核酸杂合体: {entity_counts['na_hybrid']}")
    entity_counts_str = ", ".join(entity_counts_str_parts) or None

    # 二硫键、其他连接、链、EC号、宿主、基因名等
    has_ss_bond = False
    has_other_link = False
    pep_chains, prot_chains = [], []
    pep_lengths, prot_lengths = [], []
    ec_numbers, host_organisms, gene_names = [], [], []
    organisms = []
    polymer_entities_sequences = []
    
    polymer_entities = entry.get('polymer_entities')
    if polymer_entities:
        for entity in polymer_entities:
            if entity.get('polymer_entity_instances'):
                for instance in entity['polymer_entity_instances']:
                    for conn in (instance.get('rcsb_polymer_struct_conn') or []):
                        if conn.get('connect_type') == 'disulfide bridge':
                            has_ss_bond = True
                        elif conn.get('connect_type'):
                            has_other_link = True
            
            chain_ids_container = (entity.get('rcsb_polymer_entity_container_identifiers') or {})
            chain_ids = chain_ids_container.get('auth_asym_ids')
            entity_id = chain_ids_container.get('entity_id')
            
            poly_info = entity.get('entity_poly') or {}
            length = poly_info.get('rcsb_sample_sequence_length')

            sequence = poly_info.get('pdbx_seq_one_letter_code_can')
            if sequence:
                description = (entity.get('rcsb_polymer_entity') or {}).get('pdbx_description')
                polymer_entities_sequences.append({
                    "entity_id": entity_id,
                    "chain_ids": ", ".join(chain_ids) if chain_ids else "",
                    "description": description,
                    "sequence": sequence,
                    "length": length
                })

            if not chain_ids:
                continue
            
            if not length:
                continue

            # 假设长度小于50的为多肽
            if length < 50:
                pep_chains.extend(chain_ids)
                pep_lengths.append(str(length))
            else:
                prot_chains.extend(chain_ids)
                prot_lengths.append(str(length))
            
            # EC Numbers
            rcsb_polymer_entity = entity.get('rcsb_polymer_entity') or {}
            enzyme_class_combined = rcsb_polymer_entity.get('rcsb_enzyme_class_combined')
            if enzyme_class_combined:
                for ec in enzyme_class_combined:
                    if ec.get('ec'): ec_numbers.append(ec.get('ec'))
            
            # Host Organisms
            host_organism_list = entity.get('rcsb_entity_host_organism')
            if host_organism_list:
                for host in host_organism_list:
                    if host.get('ncbi_scientific_name'): host_organisms.append(host.get('ncbi_scientific_name'))
            
            # Source Organisms and Gene Names
            source_organism_list = entity.get('rcsb_entity_source_organism')
            if source_organism_list:
                for org in source_organism_list:
                    if org.get('scientific_name'):
                        organisms.append(org['scientific_name'])
                    gene_name_list = org.get('rcsb_gene_name')
                    if gene_name_list:
                        for gene in gene_name_list:
                            if gene.get('value'): gene_names.append(gene.get('value'))
    
    ss_bond_str = "Yes" if has_ss_bond else None
    link_str = "Yes" if has_other_link else None

    # 标题 (从struct.title获取)
    title = (entry.get('struct') or {}).get('title')

    # 作者
    authors = None
    audit_author_list = entry.get('audit_author')
    if audit_author_list:
        author_names = [author.get('name') for author in audit_author_list if author.get('name')]
        if author_names:
            authors = "; ".join(author_names)

    # 关键词
    keywords = (entry.get('struct_keywords') or {}).get('text')

    # 来源生物
    organisms_str = ", ".join(sorted(list(set(organisms)))) or None

    # Symmetry and Cell
    space_group = (entry.get('symmetry') or {}).get('space_group_name_H_M')
    cell = entry.get('cell')
    cell_str = None
    if cell and all(cell.get(k) is not None for k in ['length_a', 'length_b', 'length_c', 'angle_alpha', 'angle_beta', 'angle_gamma']):
        cell_str = (
            f"a={cell['length_a']:.2f} Å, b={cell['length_b']:.2f} Å, c={cell['length_c']:.2f} Å, "
            f"α={cell['angle_alpha']:.2f}°, β={cell['angle_beta']:.2f}°, γ={cell['angle_gamma']:.2f}°"
        )

    # 参考文献
    citations = []
    citation_list = entry.get('citation')
    if citation_list:
        for cit in citation_list:
            citation_info = {
                'title': cit.get('title'),
                'authors': ", ".join(cit.get('rcsb_authors', [])) if cit.get('rcsb_authors') else None,
                'journal': cit.get('rcsb_journal_abbrev'),
                'year': cit.get('year'),
                'pubmed_id': cit.get('pdbx_database_id_PubMed'),
                'doi': cit.get('pdbx_database_id_DOI')
            }
            citations.append(citation_info)

    # Non-polymer entities (ligands)
    ligands = []
    nonpolymer_entities = entry.get('nonpolymer_entities')
    if nonpolymer_entities:
        for entity in nonpolymer_entities:
            comp = entity.get('nonpolymer_comp') or {}
            chem_comp = comp.get('chem_comp') or {}
            ligand_info = {
                'id': chem_comp.get('id'),
                'name': chem_comp.get('name'),
                'formula': chem_comp.get('formula'),
                'weight': chem_comp.get('formula_weight')
            }
            if ligand_info['id']:
                ligands.append(ligand_info)

    # Assemblies
    assemblies = []
    assembly_list = entry.get('assemblies')
    if assembly_list:
        for ass in assembly_list:
            assembly_id = (ass.get('rcsb_assembly_container_identifiers') or {}).get('assembly_id')
            if not assembly_id: continue
            
            oligomeric_state, stoichiometry_str = None, None
            symmetry_list = ass.get('rcsb_struct_symmetry')
            if symmetry_list:
                # Often multiple symmetries are listed, take the first one
                symm = symmetry_list[0]
                oligomeric_state = symm.get('oligomeric_state')
                stoichiometry = symm.get('stoichiometry')
                if stoichiometry:
                    stoichiometry_str = ", ".join(stoichiometry)
            
            assembly_info = {
                'id': assembly_id,
                'details': (ass.get('pdbx_struct_assembly') or {}).get('rcsb_details'),
                'oligomeric_state': oligomeric_state,
                'stoichiometry': stoichiometry_str
            }
            assemblies.append(assembly_info)

    pdb_info = {
        "pdb_id": pdb_id,
        "method": method if method != 'N/A' else None,
        "resolution": resolution,
        "r_factors": r_factors,
        "date": date,
        "title": title,
        "authors": authors,
        "organisms": organisms_str,
        "host_organisms": ", ".join(sorted(list(set(host_organisms)))) or None,
        "gene_names": ", ".join(sorted(list(set(gene_names)))) or None,
        "keywords": keywords,
        "ec_numbers": ", ".join(sorted(list(set(ec_numbers)))) or None,
        "molecular_weight": molecular_weight,
        "entity_counts": entity_counts_str,
        "space_group": space_group,
        "cell": cell_str,
        "ss_bond": ss_bond_str,
        "link": link_str,
        "pep_chains": ", ".join(sorted(list(set(pep_chains)))) or None,
        "prot_chains": ", ".join(sorted(list(set(prot_chains)))) or None,
        "pep_lengths": ", ".join(pep_lengths) or None,
        "prot_lengths": ", ".join(prot_lengths) or None,
        "citations": citations,
        "ligands": ligands,
        "assemblies": assemblies,
        "sequences": polymer_entities_sequences,
        "format": 'cif'
    }

    return pdb_info

def build_sequences_html(sequences):
    """根据序列信息构建HTML"""
    if not sequences:
        return ""

    sequence_items_html = ""
    for seq_info in sequences:
        chain_ids = seq_info.get('chain_ids', 'N/A')
        description = seq_info.get('description', 'N/A')
        sequence = seq_info.get('sequence', '')
        length = seq_info.get('length', 'N/A')
        
        formatted_sequence = ""
        line_length = 60
        for i in range(0, len(sequence), line_length):
            chunk = sequence[i:i+line_length]
            line_num = i + 1
            spaced_chunk = ' '.join(chunk[j:j+10] for j in range(0, len(chunk), 10))
            formatted_sequence += f'<tr><td class="seq-num">{line_num}</td><td class="seq-data">{spaced_chunk}</td></tr>'

        sequence_items_html += f"""
        <div class="sequence-item">
            <h4>链: {chain_ids} - {description} (长度: {length})</h4>
            <div class="sequence-wrapper">
                <table>
                    <tbody>
                        {formatted_sequence}
                    </tbody>
                </table>
            </div>
        </div>
        """

    return f"""
<section class="info-section">
    <h2 class="collapsible">
        序列信息
        <span class="section-toggle-arrow"></span>
    </h2>
    <div class="sequences-container">
        {sequence_items_html}
    </div>
</section>
"""

def build_info_rows(pdb_info):
    """根据PDB信息构建HTML表格行"""
    rows_html = []
    
    field_map = {
        "pdb_id": "PDB编号",
        "title": "标题",
        "method": "实验方法",
        "resolution": "分辨率",
        "r_factors": "R-factors",
        "date": "发布日期",
        "authors": "作者",
        "organisms": "来源生物",
        "host_organisms": "表达宿主",
        "gene_names": "基因名称",
        "keywords": "关键词",
        "ec_numbers": "EC编号",
        "molecular_weight": "分子量",
        "entity_counts": "实体数量",
        "space_group": "空间群",
        "cell": "晶胞参数",
        "ss_bond": "二硫键",
        "link": "其他连接",
        "pep_chains": "多肽链",
        "prot_chains": "蛋白链",
        "pep_lengths": "多肽长度",
        "prot_lengths": "蛋白长度",
    }
    
    for key, label in field_map.items():
        value = pdb_info.get(key)
        if value:
            if key == 'pdb_id':
                row_content = f'<td>{label}</td><td>{value} <a href="https://www.rcsb.org/structure/{value}" target="_blank" title="访问RCSB PDB页面">前往RCSB &#x279A;</a></td>'
            else:
                row_content = f'<td>{label}</td><td>{value}</td>'
            rows_html.append(f'<tr>{row_content}</tr>')
            
    return "\n".join(rows_html)

def build_ligands_html(ligands):
    """根据配体信息构建HTML"""
    if not ligands:
        return ""

    rows = []
    for ligand in ligands:
        row = "<tr>"
        row += f"<td>{ligand.get('id', 'N/A')}</td>"
        row += f"<td>{ligand.get('name', 'N/A')}</td>"
        row += f"<td>{ligand.get('formula', 'N/A')}</td>"
        row += f"<td>{ligand.get('weight', 'N/A')}</td>"
        row += "</tr>"
        rows.append(row)

    table_rows_html = "\n".join(rows)

    return f"""
<section class="info-section">
    <h2 class="collapsible">
        配体信息
        <span class="section-toggle-arrow"></span>
    </h2>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>名称</th>
                    <th>化学式</th>
                    <th>分子量</th>
                </tr>
            </thead>
            <tbody>
                {table_rows_html}
            </tbody>
        </table>
    </div>
</section>
"""

def build_assemblies_html(assemblies):
    """根据组装信息构建HTML"""
    if not assemblies:
        return ""

    items_html = ""
    for ass in assemblies:
        items_html += '<div class="assembly-item">'
        items_html += f'<p><strong>组装 ID:</strong> {ass.get("id", "N/A")}</p>'
        if ass.get('details'):
            items_html += f'<p><strong>详情:</strong> {ass["details"]}</p>'
        if ass.get('oligomeric_state'):
            items_html += f'<p><strong>寡聚状态:</strong> {ass["oligomeric_state"]}</p>'
        if ass.get('stoichiometry'):
            items_html += f'<p><strong>化学计量:</strong> {ass["stoichiometry"]}</p>'
        items_html += '</div>'
    
    return f"""
<section class="info-section">
    <h2 class="collapsible">
        生物组装
        <span class="section-toggle-arrow"></span>
    </h2>
    <div class="assemblies-container">
        {items_html}
    </div>
</section>
"""

def build_citations_html(citations):
    """根据引文信息构建HTML"""
    if not citations:
        return ""

    html = """
<section class="info-section">
    <h2 class="collapsible">
        参考文献
        <span class="section-toggle-arrow"></span>
    </h2>
    <div class="citations-container">
"""
    for cit in citations:
        html += '<div class="citation-item">'
        if cit.get('title'):
            html += f'<p class="citation-title">{cit["title"]}</p>'
        if cit.get('authors'):
            html += f'<p class="citation-authors">{cit["authors"]}</p>'
        
        journal_info = []
        if cit.get('journal'):
            journal_info.append(f'<em>{cit["journal"]}</em>')
        if cit.get('year'):
            journal_info.append(str(cit['year']))
        if journal_info:
            html += f'<p class="citation-journal">{", ".join(journal_info)}</p>'

        links = []
        if cit.get('pubmed_id'):
            links.append(f'<a href="https://pubmed.ncbi.nlm.nih.gov/{cit["pubmed_id"]}/" target="_blank">PubMed: {cit["pubmed_id"]}</a>')
        if cit.get('doi'):
            links.append(f'<a href="https://doi.org/{cit["doi"]}" target="_blank">DOI: {cit["doi"]}</a>')
        if links:
            html += f'<p class="citation-links">{" | ".join(links)}</p>'

        html += '</div>'
    
    html += """
    </div>
</section>
"""
    return html

try:
    json_files = glob.glob(os.path.join(pdb_data_dir, '*.json'))
    if not json_files:
        print(f"错误: 在 '{pdb_data_dir}' 目录中未找到JSON文件。")
        exit()

    for json_file in json_files:
        pdb_info = extract_pdb_data(json_file)
        if not pdb_info:
            print(f"警告：跳过文件（无法提取数据）: {json_file}")
            continue
        
        pdb_id = pdb_info['pdb_id']

        # 收集PDB信息用于JS列表
        pdb_data_list.append({
            "id": pdb_id,
            "method": pdb_info.get('method') or 'N/A',
            "resolution": pdb_info.get('resolution') or 'N/A',
            "date": pdb_info.get('date') or 'N/A',
            "note": pdb_info.get('title') or ''
        })

        # 创建单个PDB的HTML页面内容
        info_rows_html = build_info_rows(pdb_info)
        citations_html = build_citations_html(pdb_info.get('citations'))
        ligands_html = build_ligands_html(pdb_info.get('ligands'))
        assemblies_html = build_assemblies_html(pdb_info.get('assemblies'))
        sequences_html = build_sequences_html(pdb_info.get('sequences'))
        file_format = pdb_info.get('format', 'cif')
        pdb_url = f"https://files.rcsb.org/download/{pdb_id}.{file_format}"


        html_content = f"""<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>多肽结构数据库 - {pdb_id}</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/pdbe-molstar@3.3.0/build/pdbe-molstar-light.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pdbe-molstar@3.3.0/build/pdbe-molstar-plugin.js"></script>
    <link rel="stylesheet" href="../static/css/protein_detail.css">
    <style>
        .info-section {{
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            overflow: hidden;
        }}
        .info-section h2 {{
            background-color: #f7f7f7;
            color: #333;
            margin: 0;
            padding: 15px 20px;
            font-size: 1.2em;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e0e0e0;
        }}
        .info-section h2.collapsible {{
            cursor: pointer;
            transition: background-color 0.2s ease-in-out;
        }}
        .info-section h2.collapsible:hover {{
            background-color: #efefef;
        }}
        .section-toggle-arrow {{
            width: 12px;
            height: 12px;
            border: solid #333;
            border-width: 0 2px 2px 0;
            display: inline-block;
            transform: rotate(-135deg);
            transition: transform 0.3s ease;
        }}
        .collapsible.collapsed .section-toggle-arrow {{
            transform: rotate(45deg);
        }}
        .info-section > div, .info-section > table {{
            padding: 20px;
            background-color: #fff;
        }}
        .full-width-viewer-container {{
            padding: 0 !important;
            height: 600px;
        }}
        .info-section > table {{
            border-collapse: collapse;
            width: 100%;
        }}
        .info-section table td, .info-section table th {{
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #f0f0f0;
        }}
        .info-section table tr:last-child td {{
            border-bottom: none;
        }}
        .info-section table td:first-child {{
            font-weight: 600;
            color: #555;
            width: 150px;
        }}
        .citations-container .citation-item,
        .assemblies-container .assembly-item,
        .sequence-item {{
            padding: 15px 0;
            border-bottom: 1px solid #f0f0f0;
        }}
        .citations-container .citation-item:last-child,
        .assemblies-container .assembly-item:last-child,
        .sequence-item:last-child {{
            border-bottom: none;
        }}
        .sequence-wrapper {{
            max-height: 250px;
            overflow-y: auto;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            padding: 10px;
            background: #fdfdfd;
            margin-top: 10px;
        }}
        .sequence-wrapper table {{
            width: 100%;
            border: none;
        }}
        .sequence-wrapper td {{
            border: none;
        }}
        .seq-num {{
            text-align: right;
            padding-right: 1em;
            color: #999;
            font-family: 'Courier New', Courier, monospace;
            vertical-align: top;
            font-size: 0.9em;
        }}
        .seq-data {{
            font-family: 'Courier New', Courier, monospace;
            word-break: break-all;
            font-size: 1em;
            line-height: 1.5;
        }}
        .citation-title {{
            font-weight: bold;
        }}
        .citation-authors {{
            font-size: 0.9em;
            color: #555;
        }}
        .citation-journal {{
            font-size: 0.9em;
            color: #777;
        }}
        .citation-links a {{
            font-size: 0.9em;
        }}
    </style>
</head>
<body>
    <header>
        <div class="top-header">
            <img src="../THU-structure-LOGO.svg" alt="THU结构数据库标志" class="logo">
            <div class="top-nav">
                <a href="../index.html" class="nav-button">Home</a>
                <a href="../Download.html" class="nav-button">Download</a>
                <a href="https://www.frcbs.tsinghua.edu.cn/" class="nav-button">About</a>
            </div>
        </div>
        <h1>多肽结构数据库</h1>
        <p>浏览和可视化多肽三维结构</p>
    </header>
    
    <div class="search-section">
        <div class="search-container">
            <input type="text" class="search-box" placeholder="搜索蛋白质、基因、PDB编号、生物体或序列">
            <button class="search-button">搜索</button>
        </div>
    </div>
    
    <div class="protein-detail-container">
        <div class="protein-header">
            <h1>{pdb_id} - 多肽结构</h1>
            <p class="alphafold-id">{pdb_id}</p>
        </div>

        <div class="action-buttons">
            <span class="download-label">下载</span>
            <div class="button-container">
                <a href="https://files.rcsb.org/download/{pdb_id}.pdb" download>
                    <button>PDB文件</button>
                </a>
            </div>
            <div class="button-container">
                <a href="https://files.rcsb.org/download/{pdb_id}.cif" download>
                    <button>mmCIF文件</button>
                </a>
            </div>
        </div>

        <section class="info-section">
            <h2 class="collapsible">
                基本信息
                <span class="section-toggle-arrow"></span>
            </h2>
            <table>
                <tbody>
{info_rows_html}
                </tbody>
            </table>
        </section>
        
{sequences_html}
{citations_html}
{ligands_html}
{assemblies_html}
        <section class="info-section">
            <h2 class="collapsible">
                3D 结构可视化
                <span class="section-toggle-arrow"></span>
            </h2>
            <div class="full-width-viewer-container">
                <div id="myViewer"></div>
            </div>
        </section>

        <script type="text/javascript">
            var viewerInstance = new PDBeMolstarPlugin();
            var options = {{
                customData: {{
                    url: '{pdb_url}',
                    format: '{file_format}'
                }},
                moleculeId: '{pdb_id}',
                alphafoldView: true,
                bgColor: {{ r: 30, g: 30, b: 30 }},
                hideControls: true,
                subscribeEvents: true
            }}
            var viewerContainer = document.getElementById('myViewer');
            viewerInstance.render(viewerContainer, options);
            
            // 添加折叠/展开功能
            document.querySelectorAll('.collapsible').forEach(header => {{
                const content = header.nextElementSibling;
                if (!content) return;
                
                const headerText = header.innerText || header.textContent;

                // 默认折叠，但"基本信息"和"3D 结构可视化"默认展开
                if (!headerText.includes('基本信息') && !headerText.includes('3D 结构可视化')) {{
                    header.classList.add('collapsed');
                    content.style.display = 'none';
                }}

                header.addEventListener('click', () => {{
                    header.classList.toggle('collapsed');
                    if (header.classList.contains('collapsed')) {{
                        content.style.display = 'none';
                    }} else {{
                        content.style.display = 'block';
                    }}
                }});
            }});
        </script>
    </div>
    
    <script src="../static/js/protein_detail.js"></script>
</body>
</html>"""
        # 写入HTML文件
        with open(os.path.join(pdb_pages_dir, f"{pdb_id}.html"), 'w', encoding='utf-8') as html_file:
            html_file.write(html_content)

    print(f"成功生成 {len(pdb_data_list)} 个PDB详情页面到 '{pdb_pages_dir}' 目录。")

    # 生成pdb_list.js文件
    with open(pdb_list_js_file, 'w', encoding='utf-8') as js_file:
        js_file.write(f"const pdbList = {json.dumps(pdb_data_list, indent=2)};")
    print(f"成功创建 '{pdb_list_js_file}' 文件。")

except FileNotFoundError:
    print(f"错误: 目录 '{pdb_data_dir}' 未找到。请确保目录存在。")
except Exception as e:
    print(f"处理文件或生成页面时发生错误: {e}") 