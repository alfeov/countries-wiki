import { createBrowserRouter } from 'react-router'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ErrorBoundaryOutlet } from '@/components/ErrorBoundaryOutlet/ErrorBoundaryOutlet'
import { Layout } from '@/components/Layout/Layout'
import { CountriesPage } from '@/pages/CountriesPage'
import { CountryPage } from '@/pages/CountryPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        Component: ErrorBoundaryOutlet,
        ErrorBoundary: ErrorBoundary,
        children: [
          {
            index: true,
            Component: CountriesPage,
          },
          {
            path: ':alpha3Code',
            Component: CountryPage,
          },
          {
            path: '*',
            Component: NotFoundPage,
          },
          {
            path: '404', // page to redirect if redux selectors return undefined
            Component: NotFoundPage,
          },
        ],
      },
    ],
  },
])
