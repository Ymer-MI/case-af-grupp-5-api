import '../css/Layout.css'
import { Outlet } from 'react-router'
// import { useReducer } from 'react';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Layout = () => {
    // const [, dispatch] = useReducer(, useLoaderData<{}>())

    return <body>
        <Header />
            {/* <Context.Provider value={{ , dispatch }}> */}
                <main>
                    <Outlet />
                </main>
            {/* </Context.Provider> */}
        <Footer />
    </body>
}