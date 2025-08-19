import type { IJobAds } from "../models/ISearchResult";

export const removeDuplicates = (list: IJobAds[]) => {
    const jobTitles: string[] = [];

    const uniqueJobTitles = list.filter((l) => {
        if (jobTitles.includes(l.occupation.label)) {
            return false;
        } else {
            jobTitles.push(l.occupation.label);
            return true;
        }
    })

    return uniqueJobTitles;
}