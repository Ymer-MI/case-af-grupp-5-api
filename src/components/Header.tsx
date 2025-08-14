import { NavLink } from 'react-router'
import { Icon } from '@iconify/react'

export const Header = () => {
    return <header className='grid grid-cols-3 items-center'>
        <div>
            { !location.href.endsWith('/') ? <button className='align-middle' type='button' onClick={() => history.back()}><Icon icon='eva:arrow-back-outline' width='32'></Icon>Back</button> : <></> }
        </div>
        <h1></h1>
        <nav className='justify-self-end'>
            <ul className='flex gap-4'>
                <li><NavLink to='/'></NavLink></li>
            </ul>
        </nav>
    </header>
}