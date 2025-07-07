import os
import json
import glob
import zipfile
from collections import defaultdict, Counter
import re

def sanitize_filename(name):
    """Sanitizes a string to be a valid filename."""
    name = str(name).strip().lower()
    name = re.sub(r'\s+', '_', name)  # Replace spaces with underscores
    name = re.sub(r'[<>:"/\\|?*]+', '', name) # remove characters invalid in Windows filenames
    name = re.sub(r'[^a-z0-9_.-]', '', name) # Remove other invalid chars
    return name

def package_data():
    """
    Scans PDB data files, categorizes them, and packages them into ZIP archives.
    """
    pdb_data_dir = 'pdb_data'
    output_dir = os.path.join('data', 'packaged')

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"Created directory: {output_dir}")

    json_files = glob.glob(os.path.join(pdb_data_dir, '*.json'))
    if not json_files:
        print(f"Error: No JSON files found in '{pdb_data_dir}' directory.")
        return

    print(f"Found {len(json_files)} JSON files to process for packaging.")

    # Data aggregators
    files_by_method = defaultdict(list)
    files_by_ss_bond = defaultdict(list)
    files_by_resolution = defaultdict(list)
    files_by_organism = defaultdict(list)
    files_by_length = defaultdict(list)
    
    organism_counts = Counter()

    for json_path in json_files:
        try:
            with open(json_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
        except (json.JSONDecodeError, FileNotFoundError):
            print(f"Warning: Cannot read or parse JSON file: {json_path}")
            continue

        entry_data = data.get('data', {})
        if not entry_data: continue
        entry = entry_data.get('entry')
        if not entry: continue

        # 1. Categorize by experimental method
        exptl_list = entry.get('exptl')
        if exptl_list and exptl_list[0].get('method'):
            method = exptl_list[0]['method']
            files_by_method[method].append(json_path)
        else:
            files_by_method['N/A'].append(json_path)

        # 2. Categorize by disulfide bond presence
        if entry.get('cycpepdb_ssbond'):
            files_by_ss_bond['With Disulfide Bonds'].append(json_path)
        else:
            files_by_ss_bond['Without Disulfide Bonds'].append(json_path)

        # 3. Categorize by resolution
        resolution_value = None
        rcsb_entry_info = entry.get('rcsb_entry_info', {})
        if rcsb_entry_info:
            resolution_combined = rcsb_entry_info.get('resolution_combined')
            if resolution_combined and isinstance(resolution_combined, list) and len(resolution_combined) > 0:
                resolution_value = resolution_combined[0]
        if resolution_value is None:
            refine_list = entry.get('refine')
            if refine_list and isinstance(refine_list, list) and len(refine_list) > 0:
                resolution_value = refine_list[0].get('ls_d_res_high')
        
        if resolution_value:
            try:
                res_float = float(resolution_value)
                if res_float < 1.5: files_by_resolution['<1.5 A'].append(json_path)
                elif 1.5 <= res_float < 2.0: files_by_resolution['1.5-2.0 A'].append(json_path)
                elif 2.0 <= res_float < 2.5: files_by_resolution['2.0-2.5 A'].append(json_path)
                elif 2.5 <= res_float < 3.0: files_by_resolution['2.5-3.0 A'].append(json_path)
                else: files_by_resolution['>3.0 A'].append(json_path)
            except (ValueError, TypeError):
                pass
        
        # 4. Categorize by source organism (and count for top 10)
        polymer_entities = entry.get('polymer_entities')
        if isinstance(polymer_entities, list):
            processed_organisms_for_entry = set()
            for entity in polymer_entities:
                source_organisms = entity.get('rcsb_entity_source_organism')
                if isinstance(source_organisms, list):
                    for org in source_organisms:
                        if isinstance(org, dict):
                            name = org.get('ncbi_scientific_name')
                            if name and name not in processed_organisms_for_entry:
                                files_by_organism[name].append(json_path)
                                organism_counts[name] += 1
                                processed_organisms_for_entry.add(name)

        # 5. Categorize by peptide length
        polymer_entities = entry.get('polymer_entities')
        if isinstance(polymer_entities, list):
            for entity in polymer_entities:
                entity_poly = entity.get('entity_poly')
                if isinstance(entity_poly, dict):
                    length = entity_poly.get('rcsb_sample_sequence_length')
                    if isinstance(length, (int, float)) and length > 0:
                        if 1 <= length <= 10: files_by_length['1-10'].append(json_path)
                        elif 11 <= length <= 20: files_by_length['11-20'].append(json_path)
                        elif 21 <= length <= 30: files_by_length['21-30'].append(json_path)
                        elif 31 <= length <= 40: files_by_length['31-40'].append(json_path)
                        elif 41 <= length <= 50: files_by_length['41-50'].append(json_path)
                        else: files_by_length['>50'].append(json_path)

    # Packaging function
    def create_zip(name, files, subfolder=''):
        sanitized_name = sanitize_filename(name)
        zip_path = os.path.join(output_dir, subfolder, f"{sanitized_name}.zip")
        zip_dir = os.path.dirname(zip_path)
        if not os.path.exists(zip_dir):
            os.makedirs(zip_dir)
            
        with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for file_path in files:
                zipf.write(file_path, os.path.basename(file_path))
        print(f"Created package: {zip_path}")

    # Package by method
    for method, files in files_by_method.items():
        if files: create_zip(method, files, 'by_method')
    
    # Package by SS bond
    for bond_type, files in files_by_ss_bond.items():
        if files: create_zip(bond_type, files, 'by_ss_bond')

    # Package by resolution
    for res_range, files in files_by_resolution.items():
        if files: create_zip(res_range, files, 'by_resolution')

    # Package by organism (top 10)
    top_10_organisms = organism_counts.most_common(10)
    for org_name, _ in top_10_organisms:
        files = files_by_organism.get(org_name)
        if files: create_zip(org_name, files, 'by_organism')
        
    # Package by length
    for length_range, files in files_by_length.items():
        if files: create_zip(length_range, files, 'by_length')

    # Package the entire pdb_data directory
    print("\nPackaging the entire pdb_data directory...")
    full_dataset_zip_path = os.path.join(output_dir, 'CycPepDB_json.zip')
    with zipfile.ZipFile(full_dataset_zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, _, files in os.walk(pdb_data_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, pdb_data_dir)
                zipf.write(file_path, arcname)
    print(f"Created full dataset package: {full_dataset_zip_path}")
    
    print("\nPackaging complete.")

if __name__ == '__main__':
    package_data() 