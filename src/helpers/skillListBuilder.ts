import type { IHit } from '../models/ISearchResult'

export default (ad: IHit) => [...ad.must_have.skills, ...ad.nice_to_have.skills, ...ad.must_have.work_experiences.map(ex => ex.label), ...ad.nice_to_have.work_experiences.map(ex => ex.label), ad.occupation.label, ad.occupation_field.label]