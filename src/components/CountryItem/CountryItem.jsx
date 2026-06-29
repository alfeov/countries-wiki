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
  const { flags, name, population, region, capital, alpha3Code } = props

  return (
    <Card className='pt-0'>
      <ImageWithLoader
        src={flags.svg}
        alt={name}
        noImageText={name}
        aspectRatio='3/2'
      >
        <Skeleton className='w-full m-[2rem]' />
      </ImageWithLoader>
      <CardHeader className='grow'>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          <ul>
            <li>
              <strong>Population:</strong> {population.toLocaleString('en-US')}
            </li>
            <li>
              <strong>Region:</strong> {region}
            </li>
            <li>
              <strong>Capital:</strong> {capital}
            </li>
          </ul>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link to={alpha3Code} className='w-full'>
          <Button className='w-full'>View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
