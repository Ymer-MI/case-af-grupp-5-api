import '../css/SearchResults.css'
import type Occupation from '../models/Occupation'
import { DigiTypography } from '@digi/arbetsformedlingen-react'
import { SearchResultCard } from './SearchResultCard'


type SearchResultsProps = {
    query: string,
    occupations: Occupation[]
}

export const SearchResults = ({ query, occupations}: SearchResultsProps) => <section className='results-container'>
    <DigiTypography>
        <h3>{ occupations.length } resultat f&ouml;r &ldquo;{ query }&rdquo;</h3>
    </DigiTypography>
    { occupations.length === 0 ?
        (<DigiTypography>
            <p>Inga tr&auml;ffar, testa ett annat ord.</p>
        </DigiTypography>) :
        (<section className='results'>
            <ul>
                {occupations?.map(o => (
                    <SearchResultCard key={ o.getID() } occupation={ o } />
                ))}
            </ul>
        </section>)
    }
</section>
