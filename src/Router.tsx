import { createBrowserRouter } from 'react-router'
import { Suspense } from 'react'
import { DigiLoaderSpinner } from '@digi/arbetsformedlingen-react'
import { LoaderSpinnerSize } from '@digi/arbetsformedlingen'
import { Layout } from './pages/Layout'
import { Error } from './components/Error'
import Home from './pages/Home'
import { SearchResults } from './pages/SearchResult'
import { getJobs } from './services/jobSearchService'

export const router = createBrowserRouter([
    {
        path: '/',
        loader: () => {},
        element: <Suspense fallback={ <DigiLoaderSpinner afSize={ LoaderSpinnerSize.LARGE } afText='Laddar' /> }>
                    <Layout />
                </Suspense>,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
         { 
        path: 'search',
        loader: async ({ request }) => {
          const url = new URL(request.url)
          const q = url.searchParams.get('q') ?? ''
          const hits = q ? await getJobs(q) : []
          return { q, hits }
        },
        element: <SearchResults />
        }
            
        ]
    }
])