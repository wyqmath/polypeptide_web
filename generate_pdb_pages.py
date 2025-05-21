import csv
import os

# 定义CSV文件路径和输出目录
csv_file_path = 'data/CycPepDB_benchmark_backup.csv'
pdb_pages_dir = 'pdb_pages'
pdb_list_js_file = 'pdb_list.js'

# 创建输出目录（如果不存在）
if not os.path.exists(pdb_pages_dir):
    os.makedirs(pdb_pages_dir)

pdb_data_list = []

# 读取CSV文件
try:
    with open(csv_file_path, mode='r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        # 检查必须的列是否存在
        required_columns = ['PDB', 'Method', 'Resolution', 'Date', 'SSBond', 'Link', 'Pep_chains', 'Prot_chains', 'Pep_lengths', 'Prot_lengths', 'Note', 'Format']
        if not all(col in reader.fieldnames for col in required_columns):
            missing_cols = [col for col in required_columns if col not in reader.fieldnames]
            print(f"错误：CSV文件缺少以下必需的列: {', '.join(missing_cols)}")
            exit()

        for row in reader:
            pdb_id = row.get('PDB', 'UnknownPDB')
            if pdb_id == 'UnknownPDB' or not pdb_id.strip():
                print(f"警告：跳过PDB ID为空或无效的行: {row}")
                continue

            # 收集PDB信息用于JS列表
            pdb_data_list.append({
                "id": pdb_id,
                "method": row.get('Method', 'N/A'),
                "resolution": row.get('Resolution', 'N/A') or 'N/A', #确保分辨率为空时显示N/A
                "date": row.get('Date', 'N/A'),
                "note": row.get('Note', '') # 允许备注为空
            })

            # 创建单个PDB的HTML页面内容
            file_format = row.get('Format', 'pdb').lower() #默认为pdb
            pdb_url = f"https://files.rcsb.org/download/{pdb_id}.{file_format if file_format != 'naa' else 'pdb'}"


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
        html, body {{
            margin: 0;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
        }}
        .action-buttons button {{
            background-color: #D9C1D9; /* Light purple */
            color: white; /* White text */
            padding: 8px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-left: 5px; /* Add some spacing */
        }}

        .action-buttons button:hover {{
            background-color: #C8AEC8; /* Darker purple on hover */
        }}
        /* Remove underline from link wrapping button */
        .action-buttons a {{
            text-decoration: none;
        }}
        .full-width-viewer-container {{
            width: 100%;
            margin: 20px 0;
        }}
        #myViewer {{
            width: 100%;
            height: 600px;
            position: relative;
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
            <h2>
                基本信息
                <span class="toggle-arrow">▲</span>
            </h2>
            <table>
                <tbody>
                    <tr>
                        <td>PDB编号</td>
                        <td>{pdb_id} <a href="https://www.rcsb.org/structure/{pdb_id}" target="_blank" title="访问RCSB PDB页面">前往RCSB &#x279A;</a></td>
                    </tr>
                    <tr>
                        <td>实验方法</td>
                        <td>{row.get('Method', 'N/A')}</td>
                    </tr>
                    <tr>
                        <td>分辨率</td>
                        <td>{row.get('Resolution', 'N/A') or 'N/A'}</td>
                    </tr>
                    <tr>
                        <td>发布日期</td>
                        <td>{row.get('Date', 'N/A')}</td>
                    </tr>
                    <tr>
                        <td>二硫键</td>
                        <td>{row.get('SSBond', 'N/A')}</td>
                    </tr>
                    <tr>
                        <td>其他连接</td>
                        <td>{row.get('Link', 'N/A')}</td>
                    </tr>
                    <tr>
                        <td>多肽链</td>
                        <td>{row.get('Pep_chains', 'N/A')}</td>
                    </tr>
                    <tr>
                        <td>蛋白链</td>
                        <td>{row.get('Prot_chains', 'N/A')}</td>
                    </tr>
                    <tr>
                        <td>多肽长度</td>
                        <td>{row.get('Pep_lengths', 'N/A')}</td>
                    </tr>
                    <tr>
                        <td>蛋白长度</td>
                        <td>{row.get('Prot_lengths', 'N/A')}</td>
                    </tr>
                    <tr>
                        <td>备注</td>
                        <td>{row.get('Note', 'N/A')}</td>
                    </tr>
                </tbody>
            </table>
        </section>
        
        <section class="info-section">
            <h2>
                3D 结构可视化
                <span class="toggle-arrow">▲</span>
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
                    format: '{file_format if file_format != 'naa' else 'pdb'}'
                }},
                moleculeId: '{pdb_id}',
                alphafoldView: false,
                bgColor: {{ r: 255, g: 255, b: 255 }},
                hideControls: false,
                subscribeEvents: true
            }}
            var viewerContainer = document.getElementById('myViewer');
            viewerInstance.render(viewerContainer, options);
            
            // 添加折叠/展开功能
            document.addEventListener('DOMContentLoaded', function() {{
                const sections = document.querySelectorAll('.info-section h2');
                
                sections.forEach(section => {{
                    section.addEventListener('click', function() {{
                        const content = this.nextElementSibling;
                        const arrow = this.querySelector('.toggle-arrow');
                        
                        if (content.style.display === 'none') {{
                            content.style.display = 'block';
                            arrow.textContent = '▲';
                        }} else {{
                            content.style.display = 'none';
                            arrow.textContent = '▼';
                        }}
                    }});
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
        js_file.write(f"const pdbList = {str(pdb_data_list)};")
    print(f"成功创建 '{pdb_list_js_file}' 文件。")

except FileNotFoundError:
    print(f"错误: CSV文件未找到于 '{csv_file_path}'。请确保文件存在。")
except Exception as e:
    print(f"处理CSV文件或生成页面时发生错误: {e}") 