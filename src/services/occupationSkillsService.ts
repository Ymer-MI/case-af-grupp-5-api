import type { IOccupation } from "../models/ISearchResult";
import { BaseService } from "./baseService";

export class OccupationSkillsService {
    private api = new BaseService('https://jobed-connect-api.jobtechdev.se/v1')

    public getSkills = async (occupation_id: IOccupation['concept_id']) => (await this.api.get('/enriched_occupations', {
        params: {
            occupation_id,
            include_metadata: true
        }
    }))
}