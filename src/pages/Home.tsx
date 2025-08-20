import { useLoaderData } from 'react-router'
import SearchForm from '../components/SearchForm'
import { TypographyVariation } from '@digi/arbetsformedlingen'
import { DigiLinkInternal, DigiTypography } from '@digi/arbetsformedlingen-react'
import type { IHit } from '../models/ISearchResult'

type Data = { q: string; hits: IHit[] }

export default () => {
  const { q, hits } = useLoaderData() as Data
  
  return <>
    <SearchForm/>
    <section>
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
  </>
}