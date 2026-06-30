import { isRouteErrorResponse, useRouteError } from 'react-router'
import { EmptyMessage } from '@/components/EmptyMessage'

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return <EmptyMessage>{error.message}</EmptyMessage>
  }

  return (
    <EmptyMessage>
      {error instanceof Error ? error.message : 'Unknown error'}
    </EmptyMessage>
  )
}
