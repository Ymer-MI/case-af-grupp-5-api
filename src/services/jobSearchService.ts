import type { ISearchResult } from '../models/ISearchResult'
import { BaseService } from './baseService'

export class JobSearchService {
    public static DEFAULTS = {
        LIMIT: 100,
        OFFSET: 0
    }
    private api = new BaseService('https://jobsearch.api.jobtechdev.se')

    public getJobs = async (query: string, { limit, offset }: { limit?: number, offset?: number }) => (await this.api.get<ISearchResult>('/search', {
        params: {
            q: query,
            limit: limit ?? JobSearchService.DEFAULTS.LIMIT,
            offset: offset ?? JobSearchService.DEFAULTS.OFFSET
        }
    })).hits
}