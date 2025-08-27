import type { ITermFrequency } from './ISkillResponse'

export default class Skill {
    private label: string
    private percent: number

    constructor({ term, percent_for_occupation }: ITermFrequency) {
        this.label = term
        this.percent = percent_for_occupation
    }

    public getLabel = () => this.label
    public getPercent = () => this.percent
}