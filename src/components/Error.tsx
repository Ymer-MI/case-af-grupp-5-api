import { isRouteErrorResponse, useNavigate, useRouteError, type ErrorResponse } from 'react-router'
import { DigiLinkInternal, DigiNotificationErrorPage } from '@digi/arbetsformedlingen-react'
import { ErrorPageStatusCodes } from '@digi/arbetsformedlingen'

export const Error = () => {
    const error = useRouteError(), navigate = useNavigate()
    
    return <DigiNotificationErrorPage afHttpStatusCode={ isRouteErrorResponse(error) ? (error as ErrorResponse).status as unknown as ErrorPageStatusCodes : ErrorPageStatusCodes.INTERNAL_SERVER_ERRROR } afCustomHeading='Ett fel har intr&auml;ffat'>
        <p slot='bodytext'>
            {
                isRouteErrorResponse(error) ? error.statusText : 
                    typeof error === 'string' ? error :
                    'Ett ok&auml;nt fel har intr&auml;ffat.'
            }
        </p>
        <ul slot='links'>
            <li>
                <DigiLinkInternal onAfOnClick={() => { navigate(-1) }} afVariation='small'>
                    Till föregående sida
                </DigiLinkInternal>
            </li>
            <li>
                <DigiLinkInternal afHref='/' afVariation='small'>
                    Till startsidan
                </DigiLinkInternal>
            </li>
        </ul>
    </DigiNotificationErrorPage>
}