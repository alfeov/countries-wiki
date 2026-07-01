import { Link } from 'react-router'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRightIcon } from 'lucide-react'

export function BorderCountries({ borders }) {
  // const borderCountries = useSelector((state) =>
  //   selectBorderCountries(state, borders),
  // )

  return (
    <footer className='grid gap-[2rem]'>
      <h2 className='text-[2.4rem] font-[600]'>Border Countries:</h2>
      <div className='flex flex-wrap gap-[1rem]'>
        {borders?.map((country) => (
          <Link
            to={'/' + country.alpha3Code}
            key={country.alpha3Code}
            className='w-fit rounded-3xl'
          >
            <Badge className='text-[1.4rem] p-[1.2rem]'>
              {country.name}
              <ArrowUpRightIcon data-icon='inline-end' />
            </Badge>
          </Link>
        ))}
      </div>
    </footer>
  )
}
