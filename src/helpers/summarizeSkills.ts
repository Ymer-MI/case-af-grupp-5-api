type SkillOccurrence = {
    skill: string;
    occurrences: number;
}

type SkillSummary = {
    totalNumberOfSkills: number;
    skillOccurrences: SkillOccurrence[];
}

export const summarizeSkills = async (occupations: Occupation[]) => {

    const skillOccurrences: SkillOccurrence[] = [];

    occupations.forEach((o) => {
        o.getSkills((s) => {
            const skill = s.getLabel();
            const existing = skillOccurrences.find((s) => s.skill === skill);

            if (existing) {
                existing.occurrences += 1;
            } else {
                skillOccurrences.push({skill: skill, occurrences: 1} satisfies SkillOccurrence);
            };
        })
    });

    const skillSummary: SkillSummary = {
        totalNumberOfSkills: skillOccurrences.length,
        skillOccurrences: skillOccurrences
    };

    return skillSummary;
}