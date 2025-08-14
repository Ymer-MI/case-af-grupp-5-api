import type { ISearchResult } from "../models/ISearchResult";
import { BaseService } from "./baseService";

export const getJobs = async (input: string) => {
    const api = new BaseService("https://jobsearch.api.jobtechdev.se/");
    
    const jobs = await api.get<ISearchResult>("/search", {
        params: {
            q: input
        }
    });

    return jobs.hits;
}