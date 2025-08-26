import '../css/SearchResults.css'
import type { IHit } from '../models/ISearchResult'
import { DigiTypography } from '@digi/arbetsformedlingen-react'
import { SearchResultCard } from './SearchResultCard'

type SearchResultsProps = {
    query: string,
    ads: IHit[]
}

export const SearchResults = ({ query, ads}: SearchResultsProps) => <section className='results-container'>
    <DigiTypography>
        <h3>Resultat f&ouml;r &ldquo;{ query }&rdquo;</h3>
    </DigiTypography>
    { ads.length === 0 ?
        (<DigiTypography>
            <p>Inga tr&auml;ffar, testa ett annat ord.</p>
        </DigiTypography>) :
        (<section className='results'>
            <ul>
                {ads?.map(ad => (
                    <SearchResultCard key={ ad.id } ad={ ad } />
                ))}
            </ul>
        </section>)
    }
</section>