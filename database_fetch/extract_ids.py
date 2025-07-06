import csv
import os

def extract_pdb_ids_from_csv(input_csv_file, output_txt_file):
    """
    从 CSV 文件中提取 PDB ID 并保存到文本文件中。
    """
    # 检查输入文件是否存在
    if not os.path.exists(input_csv_file):
        print(f"错误: {input_csv_file} 文件未找到。")
        return

    pdb_ids = []
    try:
        with open(input_csv_file, 'r', newline='', encoding='utf-8') as csvfile:
            reader = csv.reader(csvfile)
            next(reader)  # 跳过表头
            for row in reader:
                if row:  #确保行不是空的
                    pdb_ids.append(row[0].strip())
    except Exception as e:
        print(f"读取 {input_csv_file} 时出错: {e}")
        return

    # 将 PDB ID 列表转换为逗号分隔的字符串
    pdb_ids_str = ','.join(pdb_ids)

    # 将字符串写入输出文件
    try:
        with open(output_txt_file, 'w', encoding='utf-8') as txtfile:
            txtfile.write(pdb_ids_str)
        print(f"已成功将 {len(pdb_ids)} 个 PDB ID 提取并保存到 {output_txt_file}")
    except Exception as e:
        print(f"写入 {output_txt_file} 时出错: {e}")

if __name__ == "__main__":
    input_csv = "CycPepDB.csv"
    output_txt = "backup.txt"
    extract_pdb_ids_from_csv(input_csv, output_txt) 