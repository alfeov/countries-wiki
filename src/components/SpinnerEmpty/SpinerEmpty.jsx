import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { Spinner } from '@/components/ui/spinner'

export function SpinnerEmpty({ children }) {
  return (
    <Empty className='w-full'>
      <EmptyHeader>
        <EmptyMedia variant='icon'>
          <Spinner className='size-6' />
        </EmptyMedia>
        <EmptyTitle>Loading</EmptyTitle>
        <EmptyDescription>{children}</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
