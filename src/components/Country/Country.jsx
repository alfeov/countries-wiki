import { ImageWithLoader } from '@/components/ImageWithLoader'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { ArrowLeft, ArrowUpRightIcon } from 'lucide-react'
import { Link } from 'react-router'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import {
  selectBorderCountries,
  selectCountryByAlpha3Code,
} from '@/store/countries/countriesSelector'

export function Country() {
  const params = useParams()

  const country = useSelector((state) =>
    selectCountryByAlpha3Code(state, params.alpha3Code),
  )
  const {
    flags,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country ?? {}
  const borderCountries = useSelector((state) =>
    selectBorderCountries(state, borders),
  )

  return (
    <>
      <div className='grid gap-[3rem]'>
        <Link to='/' className='w-fit rounded-4xl'>
          <Button>
            <ArrowLeft data-icon='inline-start' />
            Back
          </Button>
        </Link>
        <div className='grid gap-[3rem] lg:gap-[4rem] lg:grid-cols-2'>
          <ImageWithLoader
            src={flags?.svg}
            alt={name}
            noImageText={name}
            aspectRatio='3/2'
            wrapperClassName='rounded-2xl'
          >
            <Skeleton className='w-full bg-background' />
          </ImageWithLoader>
          <article className='grid gap-[2rem] content-start'>
            <header>
              <h1 className='text-[3rem] font-[600]'>{name}</h1>
            </header>
            <main className='grid gap-[2rem] lg:grid-cols-2'>
              <div>
                <p>
                  <strong>Native Name: </strong>
                  {nativeName}
                </p>
                <p>
                  <strong>Population: </strong>
                  {population}
                </p>
                <p>
                  <strong>Region: </strong>
                  {region}
                </p>
                <p>
                  <strong>Sub Region: </strong>
                  {subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {capital}
                </p>
              </div>
              <div>
                <p>
                  <strong>Top Level Domain: </strong>
                  {topLevelDomain?.join(' ')}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {currencies?.map((currency) => currency.name)?.join(', ')}
                </p>
                <p>
                  <strong>Languages: </strong>
                  {languages?.map((language) => language.name)?.join(', ')}
                </p>
              </div>
            </main>
            {borders && (
              <footer className='grid gap-[2rem]'>
                <h2 className='text-[2.4rem] font-[600]'>Border Countries:</h2>
                <div className='flex flex-wrap gap-[1rem]'>
                  {borderCountries?.map((country) => (
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
            )}
          </article>
        </div>
      </div>
    </>
  )
}
