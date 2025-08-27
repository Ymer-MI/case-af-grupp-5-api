import {
  LayoutBlockVariation,
  TagSize,
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiLayoutBlock,
  DigiTag,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import skillListBuilder from "../helpers/skillListBuilder";
import "../css/SearchResultCard.css";
import type { IHit } from "../models/ISearchResult";
import { CompetenceOverview } from "./CompetenceOverview";

type SearchResultCardProps = {
  ad: IHit;
};

export const SearchResultCard = (props: SearchResultCardProps) => {
    const skills = skillListBuilder(props.ad);

 const competenceData = skills.slice(0, 5).map((skill, index) => ({
      label: skill,
      value: [85, 90, 75, 70, 80][index] || 75
    }));
  return (
    <li>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afVerticalPadding>
        <DigiTypography afVariation={TypographyVariation.SMALL}>
          <h3>{props.ad.occupation.label}</h3>
          <h4>Vanliga kompetenser</h4>
          {skills.map((s, i) => <DigiTag
            afText={s}
            afSize={TagSize.SMALL}
            afNoIcon={true} key={i}/>)}

            {competenceData.length > 0 && (
  <CompetenceOverview title="Kompetensmatchning" data={competenceData} />
)}
          
        </DigiTypography>
      </DigiLayoutBlock>
    </li>
  );
};
