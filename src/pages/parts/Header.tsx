import '../../css/Header.css'
import { NavLink, useNavigate } from 'react-router'
import { DigiHeaderNavigation, DigiHeaderNavigationItem, DigiIconArrowLeft, DigiTypography } from '@digi/arbetsformedlingen-react'
import { TypographyVariation } from '@digi/arbetsformedlingen'

export const Header = () => <header>
    <div>
        { location.href.split('/').length > 4 && <button type='button' onClick={() => useNavigate()(-1)}><DigiIconArrowLeft/> Tillbaka</button> }
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