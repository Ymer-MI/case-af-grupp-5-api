import '../css/SearchResultCard.css'
import type { IHit } from '../models/ISearchResult'
import skillListBuilder from '../helpers/skillListBuilder'
import { LayoutBlockVariation, TagSize } from '@digi/arbetsformedlingen'
import { DigiLayoutBlock, DigiTag, DigiTypography } from '@digi/arbetsformedlingen-react'

type SearchResultCardProps = {
  ad: IHit
}

export const SearchResultCard = ({ ad }: SearchResultCardProps) => <li>
  <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afVerticalPadding>
    <DigiTypography>
      <h3>{ad.occupation.label}</h3>
      <h4>Vanliga kompetenser</h4>
      { skillListBuilder(ad).map((s, i) => <DigiTag afText={ s } afSize={ TagSize.SMALL } afNoIcon={ true } key={ i }/>) }
    </DigiTypography>
  </DigiLayoutBlock>
</li>