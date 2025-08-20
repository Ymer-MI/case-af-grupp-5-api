enum SourceType {
    ViaAnnonsera = 'VIA_ANNONSERA',
    ViaPlatsbankenDxa = 'VIA_PLATSBANKEN_DXA'
}

export interface ISearchResult {
    total:                 ITotal,
    positions:             number,
    query_time_in_millis:  number,
    result_time_in_millis: number,
//	    stats:                 any[],
    freetext_concepts:     IFreetextConcepts,
    hits:                  IHit[]
}

export interface IHit {
    id:                       string,
    external_id:              null | string,
    original_id:              null,
    relevance:                number,
    label:                    string,
    webpage_url:              string,
    logo_url:                 null | string,
    headline:                 string,
    application_deadline:     Date,
    number_of_vacancies:      number,
    description:              IDescription,
    employment_type:          IDuration,
    salary_type:              IDuration,
    salary_description:       null | string,
    duration:                 IDuration,
    working_hours_type:       IDuration,
    scope_of_work:            IScopeOfWork,
    access:                   null,
    employer:                 IEmployer,
    application_details:      IApplicationDetails,
    experience_required:      boolean,
    access_to_own_car:        boolean,
    driving_license_required: boolean,
    driving_license:          null,
    occupation:               IDuration,
    occupation_group:         IDuration,
    occupation_field:         IDuration,
    workplace_address:        IWorkplaceAddress,
    must_have:                IHave,
    nice_to_have:             IHave,
    application_contacts:     IApplicationContact[],
    publication_date:         Date,
    last_publication_date:    Date,
    removed:                  boolean,
    removed_date:             null,
    source_type:              SourceType,
    timestamp:                number
}

interface IFreetextConcepts {
    skill:               string[],
	occupation:          string[],
//	location:            any[],
	skill_must:          string[],
	occupation_must:     string[],
//	location_must:       any[],
	skill_must_not:      string[],
	occupation_must_not: string[],
//	location_must_not:   any[]
}

interface IApplicationContact {
    name:         null,
    description:  string,
    email:        null | string,
    telephone:    null,
    contact_type: null
}

interface IApplicationDetails {
    information: null,
    reference:   null | string,
    email:       null,
    via_af:      boolean,
    url:         string,
    other:       null
}

interface IDescription {
    text:                string,
    text_formatted:      string,
    company_information: null,
    needs:               null,
    requirements:        null,
    conditions:          null | string
}

interface IDuration {
    concept_id:             string,
    label:                  string,
    legacy_ams_taxonomy_id: string,
    weight?:                number
}

interface IEmployer {
    phone_number:        null,
    email:               null,
    url:                 null | string,
    organization_number: string,
    name:                string,
    workplace:           string
}

interface IHave {
    skills:           string[],
//  languages:        any[],
    work_experiences: IDuration[],
//	education:        any[],
//	education_level:  any[]
}

interface IScopeOfWork {
    min: number,
    max: number
}

interface IWorkplaceAddress {
    municipality:            null | string,
    municipality_code:       null | string,
    municipality_concept_id: null | string,
    region:                  null | string,
    region_code:             null | string,
    region_concept_id:       null | string,
    country:                 string,
    country_code:            string,
    country_concept_id:      string,
    street_address:          null | string,
    postcode:                null | string,
    city:                    null | string,
    coordinates:             Array<number | null>,
}

interface ITotal {
    value: number,
}