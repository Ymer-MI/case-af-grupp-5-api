import '../css/SearchForm.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { DigiFormInputSearch } from '@digi/arbetsformedlingen-react'
import { FormInputType, FormInputSearchVariation } from '@digi/arbetsformedlingen'

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        navigate(`/search?q=${searchValue}`)
      }}
    >
      <DigiFormInputSearch
        afType={FormInputType.SEARCH}
        afVariation={FormInputSearchVariation.LARGE}
        afLabel="Jobbsökning"
        afLabelDescription="Sök efter jobb med titel eller beskrivning"
        afButtonText="Sök"
        value={searchValue}
        onAfOnInput={(e: CustomEvent<{ target: { value: string } }>) =>
          setSearchValue(e.detail.target.value)
        }
      />
    </form>
  )
}
