import { useLoaderData } from 'react-router'
import type { ISearchResult } from '../models/ISearchResult'
import { DigiLinkInternal, DigiTypography } from '@digi/arbetsformedlingen-react'
import { TypographyVariation } from '@digi/arbetsformedlingen'

type Data = { q: string; hits: ISearchResult['hits'] }

export const SearchResults = () => {
  const { q, hits } = useLoaderData() as Data

  return (
    <section>
      <DigiTypography afVariation={TypographyVariation.LARGE}>
        <h2>Resultat för “{q}”</h2>
      </DigiTypography>

      {!hits?.length && <p>Inga träffar, testa ett annat ord.</p>}

      <ol style={{ display: 'grid', gap: '0.5rem', paddingLeft: '1.5rem' }}>
        {hits?.map((ad, i) => (
          <li key={i}>
            <DigiLinkInternal afHref="#">{ad.occupation.label}</DigiLinkInternal>
          </li>
        ))}
      </ol>
    </section>
  )
}
export default SearchResults