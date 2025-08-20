import type { IHit } from '../models/ISearchResult'
import { TypographyVariation } from '@digi/arbetsformedlingen'
import { DigiTypography, DigiLinkInternal } from '@digi/arbetsformedlingen-react'

type SearchResultsProps = {
    query: string,
    ads: IHit[]
}

export const SearchResluts = ({ query, ads}: SearchResultsProps) => {
    return <section>
        <DigiTypography afVariation={ TypographyVariation.LARGE }>
            <h2>Resultat för &ldquo;{ query }&rdquo;</h2>
        </DigiTypography>
        {!ads.length ?
        <p>Inga träffar, testa ett annat ord.</p> :
        <ol style={{ display: 'grid', gap: '0.5rem', paddingLeft: '1.5rem' }}>
            {ads?.map(ad => (
            <li key={ ad.id }>
                <DigiLinkInternal afHref='#'>{ ad.occupation.label }</DigiLinkInternal>
            </li>
            ))}
        </ol>
        }
    </section>
}