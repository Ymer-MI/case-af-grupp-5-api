export interface ISkillResponse {
    id:                     string;
    occupation_label:       string;
    concept_taxonomy_id:    string;
    legacy_ams_taxonomy_id: string;
    occupation_group:       IOccupationGroup;
    metadata:               IMetadata;
}

export interface ITermFrequency {
    term:                   string;
    percent_for_occupation: number;
}

interface IMetadata {
    enriched_ads_count:                 number;
    enriched_ads_total_count:           number;
    enriched_ads_percent_of_total:      number;
    enriched_candidates_term_frequency: IEnrichedCandidatesTermFrequency;
}

interface IEnrichedCandidatesTermFrequency {
    competencies: ITermFrequency[];
    geos:         ITermFrequency[];
    occupations:  ITermFrequency[];
    traits:       ITermFrequency[];
}


interface IOccupationGroup {
    occupation_group_label: string;
    concept_taxonomy_id:    string;
    ssyk:                   string;
}
