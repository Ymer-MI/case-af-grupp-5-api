import { useLoaderData } from 'react-router'
import type { IParams } from '../models/IParams'
import { SearchForm } from '../components/SearchForm'
import { SearchResults } from '../components/SearchResults'
import { CompetenceChart } from '../components/CompetenceChart'
import type Occupation from '../models/Occupation'
import { DigiLayoutColumns } from '@digi/arbetsformedlingen-react'

export default () => {
    const { parameters, occupations } = useLoaderData<{ parameters: IParams, occupations: Occupation[] }>()
    
    return <>
        <SearchForm parameters={ parameters }/>
        { parameters.query && (
                <DigiLayoutColumns af-variation="two">
                    <SearchResults query={ parameters.query } occupations={ occupations } />
                    <CompetenceChart occupations={ occupations } />
                </DigiLayoutColumns>
        )}
    </>
}
