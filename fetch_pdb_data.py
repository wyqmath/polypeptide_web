import requests
import json
import os
import time

# RCSB PDB GraphQL API 端点
URL = "https://data.rcsb.org/graphql"

# 从用户提供的文本中获取 GraphQL 查询
QUERY = """
query structure($id: String!) {
  entry(entry_id: $id) {
    rcsb_id
    entry {
      id
    }
    database_2 {
      database_id
      pdbx_database_accession
    }
    rcsb_entry_container_identifiers {
      entity_ids
      pubmed_id
      emdb_ids
      assembly_ids
    }
    rcsb_associated_holdings {
      rcsb_repository_holdings_current_entry_container_identifiers {
        assembly_ids
      }
      rcsb_repository_holdings_current {
        repository_content_types
      }
    }
    rcsb_comp_model_provenance {
      source_url
      source_pae_url
      entry_id
      source_db
    }
    pdbx_database_status {
      pdb_format_compatible
    }
    struct {
      title
    }
    rcsb_ma_qa_metric_global {
      model_id
      ma_qa_metric_global {
        name
        value
        type
        description
        type_other_details
      }
    }
    rcsb_primary_citation {
      id
      pdbx_database_id_DOI
    }
    pubmed {
      rcsb_pubmed_container_identifiers {
        pubmed_id
      }
      rcsb_pubmed_central_id
      rcsb_pubmed_doi
      rcsb_pubmed_abstract_text
      rcsb_pubmed_affiliation_info
    }
    pdbx_deposit_group {
      group_id
      group_type
    }
    rcsb_external_references {
      id
      type
      link
    }
    pdbx_database_PDB_obs_spr {
      id
      replace_pdb_id
    }
    struct_keywords {
      pdbx_keywords
      text
    }
    exptl {
      method
    }
    cell {
      length_a
      length_b
      length_c
      angle_alpha
      angle_beta
      angle_gamma
    }
    symmetry {
      space_group_name_H_M
    }
    software {
      classification
      name
    }
    rcsb_accession_info {
      deposit_date
      initial_release_date
      major_revision
      minor_revision
    }
    pdbx_audit_revision_history {
      ordinal
      data_content_type
      major_revision
      minor_revision
      revision_date
    }
    pdbx_audit_revision_details {
      ordinal
      revision_ordinal
      data_content_type
      type
      description
    }
    pdbx_audit_revision_group {
      ordinal
      revision_ordinal
      data_content_type
      group
    }
    pdbx_database_related {
      content_type
      db_id
      details
    }
    audit_author {
      name
    }
    pdbx_audit_support {
      funding_organization
      country
      grant_number
      ordinal
    }
    pdbx_initial_refinement_model {
      type
    }
    refine {
      pdbx_refine_id
      ls_d_res_high
      ls_R_factor_R_work
      ls_R_factor_R_free
      ls_R_factor_obs
    }
    pdbx_vrpt_summary_diffraction {
      DCC_R
      DCC_Rfree
    }
    pdbx_nmr_ensemble {
      conformers_calculated_total_number
      conformers_submitted_total_number
      conformer_selection_criteria
    }
    em_experiment {
      aggregation_state
      reconstruction_method
    }
    em_3d_reconstruction {
      resolution
    }
    em_software {
      category
      name
      version
    }
    citation {
      id
      title
      rcsb_journal_abbrev
      rcsb_authors
      year
      journal_volume
      page_first
      page_last
      pdbx_database_id_PubMed
      pdbx_database_id_DOI
    }
    pdbx_database_related {
      db_id
      db_name
    }
    ihm_entry_collection_mapping {
      collection_id
    }
    rcsb_entry_info {
      structure_determination_methodology
      ihm_multi_scale_flag
      ihm_multi_state_flag
      ihm_ordered_state_flag
      deposited_model_count
      representative_model
      molecular_weight
      deposited_atom_count
      deposited_polymer_monomer_count
      deposited_modeled_polymer_monomer_count
      deposited_unmodeled_polymer_monomer_count
      polymer_entity_count_protein
      polymer_entity_count_nucleic_acid
      polymer_entity_count_nucleic_acid_hybrid
    }
    rcsb_entry_group_membership {
      group_id
      aggregation_method
    }
    rcsb_binding_affinity {
      comp_id
      type
      value
      unit
      reference_sequence_identity
      provenance_code
      link
    }
    branched_entities {
      rcsb_id
      rcsb_branched_entity_container_identifiers {
        entry_id
        entity_id
        asym_ids
        auth_asym_ids
        reference_identifiers {
          provenance_source
          resource_name
          resource_accession
        }
      }
      prd {
        rcsb_id
        pdbx_reference_molecule {
          prd_id
          chem_comp_id
          name
          type
          class
        }
      }
      rcsb_branched_entity {
        pdbx_description
        formula_weight
      }
      pdbx_entity_branch {
        rcsb_branched_component_count
      }
      branched_entity_instances {
        rcsb_branched_entity_instance_container_identifiers {
          entry_id
          entity_id
          asym_id
          auth_asym_id
        }
        rcsb_branched_struct_conn {
          connect_type
          role
          ordinal_id
          connect_partner {
            label_asym_id
            label_seq_id
            label_comp_id
          }
          connect_target {
            auth_seq_id
            label_asym_id
            label_comp_id
          }
        }
        rcsb_branched_instance_feature {
          name
          type
          feature_value {
            comp_id
            details
          }
        }
      }
    }
    polymer_entities {
      polymer_entity_instances {
        rcsb_polymer_entity_instance_container_identifiers {
          auth_asym_id
          asym_id
          entry_id
          entity_id
        }
      }
      rcsb_polymer_entity_container_identifiers {
        entry_id
        entity_id
        asym_ids
        auth_asym_ids
        uniprot_ids
        reference_sequence_identifiers {
          database_accession
        }
      }
      uniprots {
        rcsb_id
        rcsb_uniprot_protein {
          source_organism {
            scientific_name
          }
        }
        rcsb_uniprot_external_reference {
          reference_name
          reference_id
        }
      }
      rcsb_polymer_entity {
        pdbx_description
        rcsb_ec_lineage {
          id
        }
        pdbx_ec
        rcsb_enzyme_class_combined {
          ec
          provenance_source
        }
      }
      rcsb_polymer_entity_annotation {
        type
        annotation_lineage {
          name
          depth
        }
      }
      rcsb_polymer_entity_group_membership {
        group_id
        similarity_cutoff
        aggregation_method
      }
      entity_poly {
        type
        rcsb_entity_polymer_type
        pdbx_seq_one_letter_code_can
        rcsb_sample_sequence_length
        rcsb_mutation_count
      }
      rcsb_entity_source_organism {
        scientific_name
        ncbi_scientific_name
        rcsb_gene_name {
          value
          provenance_source
        }
      }
      rcsb_entity_host_organism {
        ncbi_scientific_name
      }
      prd {
        rcsb_id
        pdbx_reference_molecule {
          prd_id
          chem_comp_id
          name
          type
          class
        }
      }
      chem_comp_nstd_monomers {
        chem_comp {
          id
          name
          formula
          type
          mon_nstd_parent_comp_id
        }
      }
      polymer_entity_instances {
        rcsb_polymer_instance_annotation {
          type
          annotation_id
        }
        rcsb_polymer_struct_conn {
          role
          connect_type
          connect_partner {
            label_asym_id
          }
          connect_target {
            label_asym_id
          }
        }
      }
    }
    nonpolymer_entities {
      rcsb_nonpolymer_entity_container_identifiers {
        entry_id
        entity_id
        auth_asym_ids
        asym_ids
        nonpolymer_comp_id
      }
      rcsb_nonpolymer_entity_annotation {
        type
      }
      nonpolymer_entity_instances {
        rcsb_nonpolymer_entity_instance_container_identifiers {
          auth_seq_id
          auth_asym_id
          asym_id
          entry_id
          entity_id
        }
        rcsb_nonpolymer_instance_validation_score {
          ranking_model_fit
          ranking_model_geometry
          average_occupancy
          is_subject_of_investigation
          is_subject_of_investigation_provenance
        }
      }
      rcsb_nonpolymer_entity {
        pdbx_description
      }
      nonpolymer_comp {
        chem_comp {
          id
          formula_weight
          name
          formula
        }
        pdbx_reference_molecule {
          prd_id
          chem_comp_id
          type
          name
          class
        }
        rcsb_chem_comp_descriptor {
          InChIKey
        }
      }
    }
    assemblies {
      rcsb_assembly_container_identifiers {
        assembly_id
      }
      pdbx_struct_assembly {
        rcsb_details
        method_details
        rcsb_candidate_assembly
      }
      pdbx_struct_assembly_auth_evidence {
        experimental_support
      }
      rcsb_struct_symmetry {
        kind
        type
        symbol
        oligomeric_state
        stoichiometry
      }
      rcsb_assembly_info {
        modeled_polymer_monomer_count
      }
    }
  }
}
"""

def fetch_pdb_data(pdb_id):
    """
    根据给定的 PDB ID 获取数据。
    """
    payload = {
        "query": QUERY,
        "variables": {"id": pdb_id}
    }
    try:
        response = requests.post(URL, json=payload, timeout=60)
        response.raise_for_status()  # 如果请求失败则引发 HTTPError
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"获取 {pdb_id} 数据时出错: {e}")
        return None

def main():
    """
    主函数，用于读取 ID、获取数据并保存。
    """
    # 检查 backup.txt 文件是否存在
    if not os.path.exists("backup.txt"):
        print("错误: backup.txt 文件未找到。")
        return

    # 读取 PDB IDs
    with open("backup.txt", "r") as f:
        pdb_ids_str = f.read()
        pdb_ids = [item.strip() for item in pdb_ids_str.split(',') if item.strip()]

    # 创建用于保存数据的目录
    output_dir = "pdb_data"
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # 获取并保存每个 PDB ID 的数据
    for i, pdb_id in enumerate(pdb_ids):
        print(f"正在获取 ({i+1}/{len(pdb_ids)}): {pdb_id}")
        data = fetch_pdb_data(pdb_id)
        if data:
            # 检查返回的数据中是否有错误
            if 'errors' in data:
                print(f"获取 {pdb_id} 数据时 GraphQL 返回错误: {data['errors']}")
            else:
                file_path = os.path.join(output_dir, f"{pdb_id}.json")
                with open(file_path, "w", encoding="utf-8") as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
                print(f"已将 {pdb_id} 的数据保存到 {file_path}")
        
        # 在请求之间添加短暂延时，以避免对服务器造成过大负担
        time.sleep(0.5)

if __name__ == "__main__":
    main() 