import '../css/SearchForm.css'
import { useState } from 'react'
import { DigiFormInputSearch, DigiTypography, DigiLinkInternal } from '@digi/arbetsformedlingen-react'
import { FormInputType, FormInputSearchVariation, TypographyVariation } from '@digi/arbetsformedlingen'
import { getJobs } from '../services/jobSearchService'

export default function SearchForm() {
 const [q, setQ] = useState('')
 const [hits, setHits] = useState<any[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!q) return
    setHits(await getJobs(q))
  }

 return (
    <section>
      <form onSubmit={handleSubmit}>
        <DigiFormInputSearch
          afType={FormInputType.SEARCH}
          afVariation={FormInputSearchVariation.LARGE}
          afLabel="Jobbsökning"
          afLabelDescription="Sök efter jobb med titel eller beskrivning"
          afButtonText="Sök"
          value={q}
          onAfOnInput={(e: CustomEvent<{ target: { value: string } }>) =>
            setQ(e.detail.target.value)
          }
        />
      </form>

      {hits.length > 0 && (
        <>
          <DigiTypography afVariation={TypographyVariation.LARGE}>
            <h2>Resultat för “{q}”</h2>
          </DigiTypography>
          <ol style={{ display: 'grid', gap: '.5rem', paddingLeft: '1.5rem' }}>
            {hits.map((ad, i) => (
              <li key={i}>
                <DigiLinkInternal afHref="#">{ad.occupation.label}</DigiLinkInternal>
              </li>
            ))}
          </ol>
        </>
      )}
    </section>
  )
}