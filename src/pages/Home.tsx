import { useLoaderData } from 'react-router'
import type { IHit } from '../models/ISearchResult'
import { SearchForm } from '../components/SearchForm'
import { SearchResluts } from '../components/SearchResults'

export default () => {
  const { q, hits } = useLoaderData<{ q: string | null, hits: IHit[] }>()
  
  return <>
    <SearchForm query={ q }/>
    { q && <SearchResluts query={ q } ads={ hits } /> }
  </>
}