import { isRouteErrorResponse, useRouteError } from 'react-router'
import { ErrorEmpty } from '@/shared/ui/ErrorEmpty'

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return <ErrorEmpty>{error.message}</ErrorEmpty>
  }

  return (
    <ErrorEmpty>
      {error instanceof Error ? error.message : 'Unknown error'}
    </ErrorEmpty>
  )
}
