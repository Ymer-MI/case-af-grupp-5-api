import { useLoaderData } from 'react-router'
import type { IParams } from '../models/IParams'
import type Occupation from '../models/Occupation'
import { SearchForm } from '../components/SearchForm'
import { DigiLayoutColumns } from '@digi/arbetsformedlingen-react'
import { SearchResults } from '../components/SearchResults'
import { CompetenceChart } from '../components/CompetenceChart'

export default () => {
    const { parameters, occupations } = useLoaderData<{ parameters: IParams, occupations: Occupation[] }>()
    
    return <>
        <SearchForm parameters={ parameters }/>
        { parameters.query && <DigiLayoutColumns af-variation="two">
            <SearchResults query={ parameters.query } occupations={ occupations } />
            <CompetenceChart occupations={ occupations } />
        </DigiLayoutColumns> }
    </>
}
