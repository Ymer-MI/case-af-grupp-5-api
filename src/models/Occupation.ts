import type { IOccupation } from './ISearchResult'
import type Skill from './Skill'

export default class Occupation {
    private readonly id: IOccupation['concept_id']
    private readonly label: IOccupation['label']

    constructor({ concept_id, label }: IOccupation, private readonly skills: Skill[]) {
        this.id = concept_id
        this.label = label
    }

    public getID = () => this.id

    public getLabel = () => this.label

    public getSkills = () => this.skills
}