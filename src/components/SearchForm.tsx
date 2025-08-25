import '../css/SearchForm.css'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { DigiFormInputSearch } from '@digi/arbetsformedlingen-react'
import { FormInputType, FormInputSearchVariation } from '@digi/arbetsformedlingen'

type SearchFormProps = {
  query: string | null
}

export const SearchForm = ({ query}: SearchFormProps) => {
  const  navigate = useNavigate(), [searchValue, setSearchValue] = useState(query || '')

  return <form onSubmit={(e) => {
      e.preventDefault()
      navigate(`/?q=${ searchValue }`)
    }}>
    <DigiFormInputSearch afType={ FormInputType.SEARCH } afVariation={ FormInputSearchVariation.LARGE } afLabel='S&ouml;k efter yrke med hjälp av utbildningstitel eller beskrivning' afButtonText='S&ouml;k' value={ searchValue } onAfOnInput={(e: CustomEvent<{ target: { value: string } }>) => { setSearchValue(e.detail.target.value) }}/>
  </form>
}