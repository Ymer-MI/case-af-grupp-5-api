import { BaseService } from './baseService'
import OccupationSkillsService from './occupationSkillsService'
import { removeDuplicates } from '../helpers/removeDuplicates'
import type { IOccupation, ISearchResult } from '../models/ISearchResult'
import Occupation from '../models/Occupation';
import Skill from '../models/Skill'

export class JobSearchService {
    public static DEFAULTS = {
        LIMIT: 100,
        OFFSET: 0
    }
    private api = new BaseService('https://jobsearch.api.jobtechdev.se')
    private skillService = new OccupationSkillsService()

    public getOccupations = async (query: string, { limit, offset }: { limit?: number, offset?: number }) => {
        type skillsMapType = [
            IOccupation['concept_id'],
            Skill[]
        ]
        
        const uniqueOccupations = removeDuplicates((await this.api.get<ISearchResult>('/search', {
            params: {
                q: query,
                limit: limit ?? JobSearchService.DEFAULTS.LIMIT,
                offset: offset ?? JobSearchService.DEFAULTS.OFFSET
            }
        })).hits ?? []).map(h => h.occupation)
        
        const skillsMap = new Map<skillsMapType[0], skillsMapType[1]>(await Promise.all(
            uniqueOccupations.map(async (o): Promise<skillsMapType> => [
                o.concept_id,
                await this.skillService.getSkills(o.concept_id)
            ])
        ))

        return uniqueOccupations.map(o => new Occupation(o, skillsMap.get(o.concept_id) ?? []))
    }
}