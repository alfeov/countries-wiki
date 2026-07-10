import { Link } from 'react-router'

import { motion } from 'motion/react'
import {
  createMotionedComponent,
  itemVariants,
  listVariant,
} from '@/shared/lib/motion'

import { Badge } from '@/shared/ui/badge'
import { ArrowUpRightIcon } from 'lucide-react'
import { Skeleton } from '@/shared/ui/skeleton'
import { ErrorEmpty } from '@/shared/ui/ErrorEmpty'
import { useBorders } from '@/features/borders/useBorders'

const MotionLink = createMotionedComponent(Link)

export function BorderCountries({ bordersCodes }) {
  const { borders, isError, isFetching, isSuccess, error } =
    useBorders(bordersCodes)

  return (
    <footer className='grid gap-[2rem]'>
      <h2 className='text-[2.4rem] font-[600]'>Border Countries:</h2>
      <motion.div {...listVariant()} className='flex flex-wrap gap-[1rem]'>
        {isFetching &&
          bordersCodes?.map((border) => (
            <Skeleton
              className='h-[2.6rem] w-[10rem] rounded-3xl p-[1.2rem] bg-muted-foreground dark:bg-muted'
              key={border + 'skeleton'}
            />
          ))}
        {isError && <ErrorEmpty>{error.message}</ErrorEmpty>}
        {isSuccess &&
          !isFetching &&
          borders?.map((country) => (
            <MotionLink
              variants={itemVariants}
              to={'/' + country?.codes.alpha_3}
              key={country?.codes.alpha_3}
              className='w-fit rounded-3xl'
            >
              <Badge className='text-[1.4rem] p-[1.2rem] h-[2.6rem]'>
                {country?.names.common}
                <ArrowUpRightIcon data-icon='inline-end' />
              </Badge>
            </MotionLink>
          ))}
      </motion.div>
    </footer>
  )
}
