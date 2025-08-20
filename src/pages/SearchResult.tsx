import { useLoaderData } from 'react-router'
import { DigiLinkInternal, DigiTypography } from '@digi/arbetsformedlingen-react'
import { TypographyVariation } from '@digi/arbetsformedlingen'
import { type ISearchResult } from '../models/ISearchResult'

type Data = { q: string; hits: ISearchResult['hits'] }

export const SearchResults = () => {
  const { q, hits } = useLoaderData() as Data

  return <section>
    <DigiTypography afVariation={ TypographyVariation.LARGE }>
      <h2>Resultat för &ldquo;{ q }&rdquo;</h2>
    </DigiTypography>
    {
      !hits?.length ?
      <p>Inga träffar, testa ett annat ord.</p> :
      <ol style={{ display: 'grid', gap: '0.5rem', paddingLeft: '1.5rem' }}>
        {hits?.map(ad => (
          <li key={ ad.id }>
            <DigiLinkInternal afHref="#">{ ad.occupation.label }</DigiLinkInternal>
          </li>
        ))}
      </ol>
    }
  </section>
}