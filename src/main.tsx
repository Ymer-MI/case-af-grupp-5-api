import './main.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './Router'

createRoot(document).render(<StrictMode>
    <RouterProvider router={router} />
</StrictMode>)