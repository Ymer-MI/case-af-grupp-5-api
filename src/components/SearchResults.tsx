import type { IHit } from '../models/ISearchResult'
import { TypographyVariation } from '@digi/arbetsformedlingen'
import { DigiTypography } from '@digi/arbetsformedlingen-react'
import { SearchResultCard } from './SearchResultCard'
import "../css/SearchResults.css"

type SearchResultsProps = {
    query: string,
    ads: IHit[]
}

export const SearchResults = ({ query, ads}: SearchResultsProps) => {

    if (ads.length === 0) {
        return <p>Inga träffar, testa ett annat ord.</p>
    }

    return <section className='results-container'>
        <DigiTypography afVariation={ TypographyVariation.SMALL }>
            <h3>Resultat för &ldquo;{ query }&rdquo;</h3>
            
            <section className='results'>
                <ol>
                    {ads?.map(ad => (
                        <SearchResultCard key={ ad.id } ad={ ad } />
                    ))}
                </ol>
            </section>
            
        </DigiTypography>
    </section>
}