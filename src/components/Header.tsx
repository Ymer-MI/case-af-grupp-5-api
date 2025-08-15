import '../css/Header.css'
import { NavLink } from 'react-router'
import { DigiIconArrowLeft } from '@digi/arbetsformedlingen-react'

export const Header = () => {
    return <header>
        <div>
            { !location.href.endsWith('/') ? <button type='button' onClick={() => history.back()}><DigiIconArrowLeft/>Tillbaka</button> : <></> }
        </div>
        <h1>Jobbs&ouml;k</h1>
        <nav>
            <ul>
                <li><NavLink to='/'>Hem</NavLink></li>
            </ul>
        </nav>
    </header>
}