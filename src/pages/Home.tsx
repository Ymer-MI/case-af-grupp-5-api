import { useLoaderData } from 'react-router'
import type { IParams } from '../models/IParams'
import type { IHit } from '../models/ISearchResult'
import { SearchForm } from '../components/SearchForm'
import { SearchResults } from '../components/SearchResults'

export default () => {
    const { parameters, hits } = useLoaderData<{ parameters: IParams, hits: IHit[] }>()

    return <>
        <SearchForm parameters={ parameters }/>
        { parameters.query && <SearchResults query={ parameters.query } ads={ hits } /> }
    </>
}