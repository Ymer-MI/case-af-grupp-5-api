import { createBrowserRouter } from 'react-router'
import { Suspense } from 'react'
import { DigiLoaderSpinner } from '@digi/arbetsformedlingen-react'
import { LoaderSpinnerSize } from '@digi/arbetsformedlingen'
import { Layout } from './pages/Layout'
import { Error } from './components/Error'
import Home from './pages/Home'
import jobsLoader from './loaders/jobsLoader'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                loader: jobsLoader,
                element: <Suspense fallback={ <DigiLoaderSpinner afSize={ LoaderSpinnerSize.LARGE } afText='Laddar...' /> }>
                    <Home />
                </Suspense>
            }, 
           ]
  }
])