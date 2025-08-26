import '../css/SearchForm.css'
import type { IParams } from '../models/IParams'
import { useNavigate } from 'react-router'
import { useRef, useState } from 'react'
import { DigiFormInputSearch, DigiFormSelect } from '@digi/arbetsformedlingen-react'
import { FormInputType, FormInputSearchVariation, FormSelectValidation, FormSelectVariation } from '@digi/arbetsformedlingen'

type SearchFormProps = {
    parameters: {
        query: IParams['query'],
        limit?: IParams['limit'],
    }
}

type EventType = {
   target: HTMLInputElement | HTMLSelectElement
}

export const SearchForm = ({ parameters }: SearchFormProps) => {
    const  navigate = useNavigate(), formRef = useRef<HTMLFormElement>(null), formID = 'search-form', [params, setParams] = useState({
        query: parameters.query || '', limit: parameters.limit ?? 100
    }), submitHandler = ({ limit }: { limit?: number } = {}) => {
        navigate(`?q=${ params.query  }&limit=${ limit ?? params.limit }`)
    }
    
    return <form ref={ formRef } id={ formID } onSubmit={(e) => {
        e.preventDefault()
        submitHandler()
    }}>
    <DigiFormInputSearch afType={ FormInputType.SEARCH } afVariation={ FormInputSearchVariation.LARGE } afLabel='S&ouml;k efter yrke med hjälp av utbildningstitel eller beskrivning' afButtonText='S&ouml;k' value={ params.query } onAfOnInput={(e: CustomEvent<EventType>) => { setParams({ ...params, query: e.detail.target.value }) }}/>
    <DigiFormSelect afLabel='Antal resultat per sida' afVariation={ FormSelectVariation.LARGE } afValidation={ FormSelectValidation.NEUTRAL } afValue={ `${ params.limit }` } onAfOnChange={(e: CustomEvent<EventType>) => {
        setParams({ ...params, limit: +e.detail.target.value })
        submitHandler({ limit: +e.detail.target.value })
    }}>
        <option key='1' value='25'>25</option>
        <option key='2' value='50'>50</option>
        <option key='3' value='75'>75</option>
        <option key='4' value='100'>100</option>
    </DigiFormSelect>
    </form>
}