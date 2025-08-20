import { useNavigate } from 'react-router'
import { useState } from 'react'
import { DigiFormInputSearch } from '@digi/arbetsformedlingen-react'
import { FormInputType, FormInputSearchVariation } from '@digi/arbetsformedlingen'

export default () => {
  const  navigate = useNavigate(), [searchValue, setSearchValue] = useState('')

  return <form onSubmit={(e) => {
      e.preventDefault()
      navigate(`/?q=${ searchValue }`)
    }}>
    <DigiFormInputSearch afType={ FormInputType.SEARCH } afVariation={ FormInputSearchVariation.LARGE } afLabel='Jobbs&ouml;kning' afLabelDescription='S&ouml;k efter jobb med titel eller beskrivning' afButtonText='S&ouml;k' value={ searchValue } onAfOnInput={(e: CustomEvent<{ target: { value: string } }>) => { setSearchValue(e.detail.target.value) }}/>
  </form>
}