import { BaseService } from './baseService'
import { removeDuplicates } from '../helpers/removeDuplicates'
import type { ISearchResult } from '../models/ISearchResult'
import Occupation from '../models/Occupation'

export class JobSearchService {
    public static DEFAULTS = {
        LIMIT: 100,
        OFFSET: 0
    }
    private api = new BaseService('https://jobsearch.api.jobtechdev.se')

    public getOccupations = async (query: string, { limit, offset }: { limit?: number, offset?: number }) => removeDuplicates((await this.api.get<ISearchResult>('/search', {
        params: {
            q: query,
            limit: limit ?? JobSearchService.DEFAULTS.LIMIT,
            offset: offset ?? JobSearchService.DEFAULTS.OFFSET
        }
    })).hits ?? []).map(h => new Occupation(h.occupation))
}