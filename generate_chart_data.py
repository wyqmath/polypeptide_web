import os
import json
import glob
from collections import Counter

def generate_chart_data():
    """
    Scans PDB data files, aggregates statistics, and saves them to a JSON file for charting.
    """
    pdb_data_dir = 'pdb_data'
    output_dir = os.path.join('static', 'data')
    output_file = os.path.join(output_dir, 'chart_data.json')

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"Created directory: {output_dir}")

    json_files = glob.glob(os.path.join(pdb_data_dir, '*.json'))
    if not json_files:
        print(f"Error: No JSON files found in '{pdb_data_dir}' directory.")
        return

    print(f"Found {len(json_files)} JSON files to process.")

    # Data aggregators
    method_counts = Counter()
    release_year_counts = Counter()
    ss_bond_counts = Counter({'With Disulfide Bonds': 0, 'Without Disulfide Bonds': 0})
    resolutions = []
    organism_counts = Counter()
    peptide_lengths = []
    total_entries = 0

    for json_path in json_files:
        try:
            with open(json_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
        except (json.JSONDecodeError, FileNotFoundError):
            print(f"Warning: Cannot read or parse JSON file: {json_path}")
            continue

        entry_data = data.get('data', {})
        if not entry_data:
            continue
        
        entry = entry_data.get('entry')
        if not entry:
            continue
        
        total_entries += 1

        # 1. Aggregate experimental methods
        exptl_list = entry.get('exptl')
        if exptl_list and exptl_list[0].get('method'):
            method = exptl_list[0]['method']
            method_counts[method] += 1
        else:
            method_counts['N/A'] += 1

        # 2. Aggregate release years
        rcsb_accession_info = entry.get('rcsb_accession_info', {})
        release_date = (rcsb_accession_info.get('initial_release_date') or '').split('T')[0]
        if release_date and len(release_date) >= 4:
            year = release_date[:4]
            release_year_counts[year] += 1

        # 3. Aggregate disulfide bond presence
        if entry.get('cycpepdb_ssbond'):
            ss_bond_counts['With Disulfide Bonds'] += 1
        else:
            ss_bond_counts['Without Disulfide Bonds'] += 1

        # 4. Aggregate resolution
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
                resolutions.append(float(resolution_value))
            except (ValueError, TypeError):
                pass

        # 5. Aggregate source organisms
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
                                organism_counts[name] += 1
                                processed_organisms_for_entry.add(name)

        # 6. Aggregate peptide lengths
        polymer_entities = entry.get('polymer_entities')
        if isinstance(polymer_entities, list):
            for entity in polymer_entities:
                entity_poly = entity.get('entity_poly')
                if isinstance(entity_poly, dict):
                    length = entity_poly.get('rcsb_sample_sequence_length')
                    if isinstance(length, (int, float)) and length > 0:
                        peptide_lengths.append(length)
            
    # Prepare data for JSON output
    # Filter out methods with zero counts
    active_methods = {k: v for k, v in method_counts.items() if v > 0}
    
    # Sort methods by count, descending, for a cleaner chart legend
    sorted_methods_list = sorted(active_methods.items(), key=lambda item: item[1], reverse=True)

    # Format labels to include counts and prepare data
    formatted_labels = [f"{method} ({count})" for method, count in sorted_methods_list]
    method_values = [count for method, count in sorted_methods_list]

    # Sort years for the line chart
    sorted_years = sorted(release_year_counts.items())
    years = [year for year, count in sorted_years]
    year_counts = [count for year, count in sorted_years]
    
    # Helper for histogram
    def simple_histogram(data, bins):
        hist = [0] * (len(bins) - 1)
        for value in data:
            for i in range(len(bins) - 1):
                if bins[i] <= value < bins[i+1]:
                    hist[i] += 1
                    break
        return hist
        
    # Prepare resolution data
    resolution_bins = [0, 1.5, 2.0, 2.5, 3.0, 10.0]
    resolution_labels = ['< 1.5 Å', '1.5-2.0 Å', '2.0-2.5 Å', '2.5-3.0 Å', '> 3.0 Å']
    numeric_resolutions = [r for r in resolutions if isinstance(r, (int, float))]
    hist_res = simple_histogram(numeric_resolutions, resolution_bins)

    # Prepare organism data (top 10)
    top_organisms = organism_counts.most_common(10)
    top_organisms_labels = [f"{name} ({count})" for name, count in reversed(top_organisms)]
    top_organisms_data = [count for name, count in reversed(top_organisms)]
    
    # Prepare peptide length data
    length_bins = [0, 10, 20, 30, 40, 50, 1000]
    length_labels = ['1-10', '11-20', '21-30', '31-40', '41-50', '>50']
    hist_len = simple_histogram(peptide_lengths, length_bins)

    chart_data = {
        'total_entries': total_entries,
        'methods': {
            'labels': formatted_labels,
            'data': method_values
        },
        'releases_over_time': {
            'labels': years,
            'data': year_counts
        },
        'ss_bonds': {
            'labels': list(ss_bond_counts.keys()),
            'data': list(ss_bond_counts.values())
        },
        'resolution_distribution': {
            'labels': resolution_labels,
            'data': hist_res
        },
        'top_organisms': {
            'labels': top_organisms_labels,
            'data': top_organisms_data
        },
        'peptide_length_distribution': {
            'labels': length_labels,
            'data': hist_len
        }
    }

    # Write data to JSON file
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(chart_data, f, indent=4)
        print(f"Successfully generated chart data at: {output_file}")
    except Exception as e:
        print(f"Error writing to JSON file: {e}")


if __name__ == '__main__':
    generate_chart_data() 