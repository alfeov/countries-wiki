import { Link } from 'react-router'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRightIcon } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBorders } from '@/store/borders/bordersActions'
import { selectAllBorders } from '@/store/borders/bordersSelectors'

export function BorderCountries({ borders: bordersCodes }) {
  const { borders, state, error } = useSelector(selectAllBorders)
  const dispatch = useDispatch()

  useEffect(() => {
    if (bordersCodes.length !== 0) dispatch(loadBorders(bordersCodes))
  }, [])

  return (
    <footer className='grid gap-[2rem]'>
      <h2 className='text-[2.4rem] font-[600]'>Border Countries:</h2>
      <div className='flex flex-wrap gap-[1rem]'>
        {bordersCodes.length === 0 && (
          <p>There are no borders of this country</p>
        )}
        {bordersCodes.length !== 0 &&
          borders?.flat()?.map((country) => (
            <Link
              to={'/' + country.codes.alpha_3}
              key={country.codes.alpha_3}
              className='w-fit rounded-3xl'
            >
              <Badge className='text-[1.4rem] p-[1.2rem]'>
                {country.names.common}
                <ArrowUpRightIcon data-icon='inline-end' />
              </Badge>
            </Link>
          ))}
      </div>
    </footer>
  )
}
