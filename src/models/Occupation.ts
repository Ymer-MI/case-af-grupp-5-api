import type { IOccupation } from './ISearchResult'
import type Skill from './Skill'

export default class Occupation {
    private id: IOccupation['concept_id']
    private label: IOccupation['label']
    private skills: Skill[]

    constructor({ concept_id, label }: IOccupation, skills: Skill[]) {
        this.id = concept_id
        this.label = label
        this.skills = skills
    }

    public getID = () => this.id

    public getLabel = () => this.label

    public getSkills = () => this.skills
}