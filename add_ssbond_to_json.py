import csv
import json
import os

def add_ssbond_to_json():
    """
    Reads SSBond information from a CSV file and adds it to corresponding JSON files
    in the pdb_data directory.
    """
    csv_file_path = 'data/CycPepDB.csv'
    json_dir = 'pdb_data'

    # Step 1: Read SSBond data from CSV into a dictionary
    ssbond_map = {}
    try:
        with open(csv_file_path, mode='r', encoding='utf-8') as csvfile:
            reader = csv.reader(csvfile)
            # Skip header lines if necessary. Assuming the first non-empty rows are data
            # based on user-provided sample.
            for row in reader:
                if not row: continue # Skip empty rows
                # Basic check for a valid-looking row
                if len(row) > 4:
                    pdb_id = row[0]
                    ssbond_info = row[4]
                    # Add to map only if PDB ID and SSBond info are not empty
                    if pdb_id and ssbond_info:
                        ssbond_map[pdb_id] = ssbond_info
        print(f"成功从 {csv_file_path} 中读取了 {len(ssbond_map)} 条二硫键信息。")
    except FileNotFoundError:
        print(f"错误: 文件 {csv_file_path} 未找到。")
        return
    except Exception as e:
        print(f"读取CSV文件时发生错误: {e}")
        return

    # Check if pdb_data directory exists
    if not os.path.isdir(json_dir):
        print(f"错误: 目录 '{json_dir}' 不存在。")
        return

    # Step 2: Iterate through JSON files in pdb_data directory
    json_files = [f for f in os.listdir(json_dir) if f.endswith('.json')]
    updated_files_count = 0
    skipped_files_count = 0

    print(f"开始更新 {json_dir} 目录中的JSON文件...")

    for json_filename in json_files:
        pdb_id_from_filename = json_filename.upper().replace('.JSON', '')

        # Step 3: Check if the PDB ID from filename is in our map
        if pdb_id_from_filename in ssbond_map:
            json_file_path = os.path.join(json_dir, json_filename)
            try:
                # Step 4: Read the JSON file
                with open(json_file_path, 'r', encoding='utf-8') as f:
                    pdb_data = json.load(f)

                # Step 5: Add the SSBond information
                if 'data' in pdb_data and 'entry' in pdb_data.get('data', {}):
                    pdb_data['data']['entry']['cycpepdb_ssbond'] = ssbond_map[pdb_id_from_filename]
                    
                    # Step 6: Write the updated JSON back to the file
                    with open(json_file_path, 'w', encoding='utf-8') as f:
                        json.dump(pdb_data, f, indent=2) # Use indent=2 for readability
                    
                    updated_files_count += 1
                else:
                    print(f"警告: {json_filename} 结构不符合预期，已跳过。")
                    skipped_files_count += 1

            except json.JSONDecodeError:
                print(f"警告: 无法解析 {json_filename} 的JSON内容，已跳过。")
                skipped_files_count += 1
            except Exception as e:
                print(f"处理 {json_filename} 时发生错误: {e}")
                skipped_files_count += 1
    
    print("\n--- 更新完成 ---")
    print(f"成功更新文件数: {updated_files_count}")
    print(f"跳过或失败文件数: {skipped_files_count}")

if __name__ == '__main__':
    add_ssbond_to_json() 