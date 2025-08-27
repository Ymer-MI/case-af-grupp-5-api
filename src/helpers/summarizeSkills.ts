type SkillOccurrence = {
    skill: string;
    occurrences: number;
}

type SkillSummary = {
    totalNumberOfSkills: number;
    skillOccurrences: SkillOccurrence[];
}

export const summarizeSkills = async (occupations: Occupation[]): Promise<SkillSummary> => {

    const skillOccurrences: SkillOccurrence[] = [];
    const allSkills = await Promise.all(occupations.map((o) => o.getSkills()));

    allSkills.forEach((a) => {
        a.forEach((s) => {
            const skill = s.getLabel();
            const existing = skillOccurrences.find((s) => s.skill === skill);

            if (existing) {
                existing.occurrences += 1;
            } else {
                skillOccurrences.push({skill: skill, occurrences: 1})
            };
        })
    });

    const skillSummary: SkillSummary = {
        totalNumberOfSkills: skillOccurrences.length,
        skillOccurrences: skillOccurrences
    };

    return skillSummary;
}