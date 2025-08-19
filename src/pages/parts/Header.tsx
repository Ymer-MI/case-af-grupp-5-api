import '../css/Header.css'
import { NavLink } from 'react-router'
import { DigiHeaderNavigation, DigiHeaderNavigationItem, DigiIconArrowLeft, DigiTypography } from '@digi/arbetsformedlingen-react'
import { TypographyVariation } from '@digi/arbetsformedlingen'

export const Header = () => {
    return <header>
        <div>
            { !location.href.endsWith('/') ? <button type='button' onClick={() => history.back()}><DigiIconArrowLeft/> Tillbaka</button> : <></> }
        </div>
        <DigiTypography afVariation={TypographyVariation.LARGE}>
            <h1>Jobbs&ouml;k</h1>
        </DigiTypography>
        <DigiHeaderNavigation afCloseButtonText='St&auml;ng' afCloseButtonAriaLabel='St&auml;ng meny' afNavAriaLabel='Huvudmeny'>
            <ul>
                <li>
                    <DigiHeaderNavigationItem>
                        <NavLink to='/'>Hem</NavLink>
                    </DigiHeaderNavigationItem> 
                </li>
            </ul>
        </DigiHeaderNavigation>
    </header>
}