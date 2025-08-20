import { createBrowserRouter } from 'react-router'
import { Suspense } from 'react'
import { DigiLoaderSpinner } from '@digi/arbetsformedlingen-react'
import { LoaderSpinnerSize } from '@digi/arbetsformedlingen'
import { Layout } from './pages/Layout'
import { Error } from './components/Error'
import { getJobs } from './services/jobSearchService'
import Home from './pages/Home'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                loader: async ({ request }) => {
                    const q = new URL(request.url).searchParams.get('q'), hits = q ? await getJobs(q) : []
        
                    return { q, hits }
                },
                element: <Suspense fallback={ <DigiLoaderSpinner afSize={ LoaderSpinnerSize.LARGE } afText='Laddar...' /> }>
                    <Home />
                </Suspense>
            }, 
           ]
  }
])