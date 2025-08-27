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

type SearchResultCardProps = {
  ad: IHit;
};

export const SearchResultCard = (props: SearchResultCardProps) => {
    const skills = skillListBuilder(props.ad);

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
        </DigiTypography>
      </DigiLayoutBlock>
    </li>
  );
};