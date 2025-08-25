import { useLoaderData } from 'react-router'
import type { IHit } from '../models/ISearchResult'
import { SearchForm } from '../components/SearchForm'
import { SearchResults } from '../components/SearchResults'
import { removeDuplicates } from '../helpers/removeDuplicates'

export default () => {
  const { q, hits } = useLoaderData<{ q: string | null, hits: IHit[] }>()

  const ads = removeDuplicates(hits);
  
  return <>
    <SearchForm query={ q }/>
    { q && <SearchResults query={ q } ads={ ads } /> }
  </>
}