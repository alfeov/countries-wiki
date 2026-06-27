import { createBrowserRouter } from 'react-router'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ErrorBoundaryOutlet } from '@/components/ErrorBoundaryOutlet/ErrorBoundaryOutlet'
import { Layout } from '@/components/Layout/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        Component: ErrorBoundaryOutlet,
        ErrorBoundary: ErrorBoundary,
      },
    ],
  },
])
