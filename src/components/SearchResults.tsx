import type { IHit } from '../models/ISearchResult'
import { TypographyVariation } from '@digi/arbetsformedlingen'
import { DigiTypography } from '@digi/arbetsformedlingen-react'
import "../css/SearchResults.css"
import { SearchResultCard } from './SearchResultCard'
import { HorizontalCompetenceChart } from './HorizontalCompChart'
import skillListBuilder from '../helpers/skillListBuilder'

type SearchResultsProps = {
    query: string,
    ads: IHit[]
}

export const SearchResults = ({ query, ads}: SearchResultsProps) => {

    if (ads.length === 0) {
        return <DigiTypography>
            <p>Inga träffar, testa ett annat ord.</p>
         </DigiTypography>
    }

    
    const allSkills = ads.flatMap(ad => skillListBuilder(ad))
    const skillCounts = allSkills.reduce((acc, skill) => {
        acc[skill] = (acc[skill] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const aggregatedCompetenceData = Object.entries(skillCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 7)
        .map(([skill, count]) => ({
            label: skill,
            value: count
        }))

    return <section className='results-container'>
        <DigiTypography afVariation={ TypographyVariation.SMALL }>
            <h3>Resultat för "{ query }"</h3>
            
            <div className="digi-layout-columns">
                <div className="digi-layout-columns__left">
                    <section className='results'>
                        <h4>Systemutvecklare</h4>
                        <p>Välj en konsult</p>
                        <ol>
                            {ads?.map(ad => (
                                <SearchResultCard key={ ad.id } ad={ ad } />
                            ))}
                        </ol>
                    </section>
                </div>
                <div className="digi-layout-columns__right">
                    <HorizontalCompetenceChart 
                        title="Diagram" 
                        data={aggregatedCompetenceData} 
                    />
                </div>
            </div>
            
        </DigiTypography>
    </section>
}