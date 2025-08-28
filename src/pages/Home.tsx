import { useLoaderData } from 'react-router'
import type { IParams } from '../models/IParams'
import { SearchForm } from '../components/SearchForm'
import { SearchResults } from '../components/SearchResults'
import type Occupation from '../models/Occupation'

export default () => {
    const { parameters, occupations } = useLoaderData<{ parameters: IParams, occupations: Occupation[] }>()
    
    return <>
        <SearchForm parameters={ parameters }/>
        { parameters.query && <SearchResults query={ parameters.query } occupations={ occupations } /> }
    </>
}