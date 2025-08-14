import { createBrowserRouter } from 'react-router'
import { Suspense } from 'react'
import { Loading } from './components/Loading'
import { Layout } from './pages/Layout'
import { Error } from './components/Error'

export const router = createBrowserRouter([
    {
        path: '/',
        loader: () => {},
        element: <Suspense fallback={ <Loading /> }>
                    <Layout />
                </Suspense>,
        errorElement: <Error />,
        children: [
        ]
    }
])