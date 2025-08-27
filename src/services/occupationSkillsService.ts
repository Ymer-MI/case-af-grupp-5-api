import type { IOccupation } from "../models/ISearchResult";
import type { ISkillResponse } from "../models/ISkillResponse";
import Skill from "../models/Skill";
import { BaseService } from "./baseService";

export default class OccupationSkillsService {
    private api = new BaseService('https://jobed-connect-api.jobtechdev.se/v1')

    public getSkills = async (occupation_id: IOccupation['concept_id']) => (await this.api.get<ISkillResponse>('/enriched_occupations', {
        params: {
            occupation_id,
            include_metadata: true
        }
    })).metadata.enriched_candidates_term_frequency.competencies.filter(s => s.percent_for_occupation > 3.9).map(s => new Skill(s))
}