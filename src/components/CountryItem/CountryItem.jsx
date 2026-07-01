import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import { Skeleton } from '@/components/ui/skeleton'
import { ImageWithLoader } from '@/components/ImageWithLoader'

export function CountryItem(props) {
  const { flag, names, population, region, capitals, codes } = props

  return (
    <Card className='pt-0'>
      <ImageWithLoader
        src={flag?.url_png || 'errorSrc'} // to perform empty string
        alt={names?.common}
        noImageText={names?.common}
        aspectRatio='3/2'
      >
        <Skeleton className='w-full m-[2rem]' />
      </ImageWithLoader>
      <CardHeader className='grow'>
        <CardTitle>{names?.common}</CardTitle>
        <CardDescription>
          <ul>
            <li>
              <strong>Population:</strong> {population?.toLocaleString('en-US')}
            </li>
            <li>
              <strong>Region:</strong> {region}
            </li>
            <li>
              <strong>Capital:</strong>{' '}
              {capitals?.map((capital) => capital?.name)?.join(', ')}
            </li>
          </ul>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link to={codes?.alpha_3} className='w-full rounded-4xl'>
          <Button className='w-full'>View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
