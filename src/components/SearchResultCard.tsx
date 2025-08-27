import '../css/SearchResultCard.css'
import type Occupation from '../models/Occupation'
import { LayoutBlockVariation, TagSize } from '@digi/arbetsformedlingen'
import { DigiLayoutBlock, DigiTag, DigiTypography } from '@digi/arbetsformedlingen-react'

type SearchResultCardProps = {
    occupation: Occupation
}

export const SearchResultCard = ({ occupation }: SearchResultCardProps) => <li>
    <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afVerticalPadding>
        <DigiTypography>
            <h3>{ occupation.getLabel() }</h3>
            <h4>Vanliga kompetenser</h4>
            { occupation.getSkills().map((s, i) => <DigiTag afText={ s.getLabel() } afSize={ TagSize.SMALL } afNoIcon={ true } key={ i }/>) }
        </DigiTypography>
    </DigiLayoutBlock>
</li>