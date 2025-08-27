import type { IHit } from '../models/ISearchResult'

export const removeDuplicates = (hits: IHit[]) => {
    const jobTitles: string[] = []

    return hits.filter(h => !jobTitles.includes(h.occupation.concept_id) && jobTitles.push(h.occupation.concept_id))
}