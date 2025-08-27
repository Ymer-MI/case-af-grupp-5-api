import type { IHit } from '../models/ISearchResult';

export const removeDuplicates = (list: IHit[]) => {
    const jobTitles: string[] = []

    return list.filter((l) => {
        if (jobTitles.includes(l.occupation.label)) {
            return false;
        } else {
            jobTitles.push(l.occupation.label);
            return true;
        }
    })
}