import OccupationSkillsService from '../services/occupationSkillsService'
import type { IOccupation } from './ISearchResult'
import type Skill from './Skill'

export default class Occupation {
    private skillService = new OccupationSkillsService()
    private id: IOccupation['concept_id']
    private label: IOccupation['label']
    private skills: Skill[] = []

    constructor({ concept_id, label }: IOccupation) {
        this.id = concept_id
        this.label = label
        this.loadSkills()
    }

    private async loadSkills() {
        try {
            this.skills = await this.skillService.getSkills(this.id)
        } catch (error) {
            console.error('Failed to load skills: ', error)
        }
    }

    public getID = () => this.id

    public getLabel = () => this.label

    public getSkills = () => this.skills
}