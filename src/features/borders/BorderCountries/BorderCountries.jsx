import { Link } from 'react-router'
import { Badge } from '@/shared/ui/badge'
import { ArrowUpRightIcon } from 'lucide-react'
import { Skeleton } from '@/shared/ui/skeleton'
import { ErrorEmpty } from '@/shared/ui/ErrorEmpty'
import { useBorders } from '@/features/borders/useBorders'

export function BorderCountries({ bordersCodes }) {
  const { borders, status, error } = useBorders(bordersCodes)

  return (
    <footer className='grid gap-[2rem]'>
      <h2 className='text-[2.4rem] font-[600]'>Border Countries:</h2>
      <div className='flex flex-wrap gap-[1rem]'>
        {status === 'fetching' &&
          bordersCodes?.map((border) => (
            <Skeleton
              className='h-[2.6rem] w-[10rem] rounded-3xl p-[1.2rem] bg-muted-foreground dark:bg-muted'
              key={border + 'skeleton'}
            />
          ))}
        {status === 'error' && <ErrorEmpty>{error.message}</ErrorEmpty>}
        {status === 'idle' &&
          borders?.map((country) => (
            <Link
              to={'/' + country.codes.alpha_3}
              key={country.codes.alpha_3}
              className='w-fit rounded-3xl'
            >
              <Badge className='text-[1.4rem] p-[1.2rem] h-[2.6rem]'>
                {country.names.common}
                <ArrowUpRightIcon data-icon='inline-end' />
              </Badge>
            </Link>
          ))}
      </div>
    </footer>
  )
}
