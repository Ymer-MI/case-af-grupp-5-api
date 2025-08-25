import type { IHit } from '../models/ISearchResult'

export default (ad: IHit) => [...ad.must_have.skills.map(skill => skill.label), ...ad.nice_to_have.skills.map(skill => skill.label), ...ad.must_have.work_experiences.map(ex => ex.label), ...ad.nice_to_have.work_experiences.map(ex => ex.label), ad.occupation.label, ad.occupation_field.label]