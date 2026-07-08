import { Link } from 'react-router'

import { ImageWithLoader } from '@/shared/ui/ImageWithLoader'
import { Button } from '@/shared/ui/button'
import { Skeleton } from '@/shared/ui/skeleton'
import { ArrowLeft } from 'lucide-react'
import { BorderCountries } from '@/features/borders/BorderCountries'
import { SpinnerEmpty } from '@/shared/ui/SpinnerEmpty'
import { ErrorEmpty } from '@/shared/ui/ErrorEmpty'
import { useCountry } from '@/features/country/useCountry'

export function Country() {
  const { country, status, error, countryCode } = useCountry()

  const {
    flag,
    names,
    population,
    region,
    subregion,
    capitals,
    currencies,
    timezones,
    area,
    languages,
    borders,
  } = country

  return (
    <>
      {status === 'fetching' && (
        <SpinnerEmpty>Loading country with code {countryCode}</SpinnerEmpty>
      )}
      {status === 'error' && <ErrorEmpty>{error.message}</ErrorEmpty>}
      {status === 'idle' && (
        <div className='grid gap-[3rem]'>
          <Link to='/' className='w-fit rounded-4xl'>
            <Button>
              <ArrowLeft data-icon='inline-start' />
              Back
            </Button>
          </Link>
          <div className='grid gap-[3rem] lg:gap-[4rem] lg:grid-cols-2'>
            <ImageWithLoader
              src={flag?.url_png || 'errorSrc'}
              alt={names?.common}
              noImageText={names?.common}
              aspectRatio='3/2'
              wrapperClassName='rounded-2xl'
            >
              <Skeleton className='w-full bg-muted-foreground dark:bg-muted' />
            </ImageWithLoader>
            <article className='grid gap-[2rem] content-start'>
              <header>
                <h1 className='text-[3rem] font-[600]'>{names?.common}</h1>
              </header>
              <main className='grid gap-[2rem] lg:grid-cols-2'>
                <div>
                  <p>
                    <strong>Official Name: </strong>
                    {names?.official}
                  </p>
                  <p>
                    <strong>Population: </strong>
                    {population?.toLocaleString('en-US')}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {region}
                  </p>
                  <p>
                    <strong>Sub Region: </strong>
                    {subregion || '-'}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {capitals?.map((capital) => capital.name)?.join(', ') ||
                      '-'}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Currencies: </strong>
                    {currencies?.map((currency) => currency.name)?.join(', ') ||
                      '-'}
                  </p>
                  <p>
                    <strong>Languages: </strong>
                    {languages?.map((language) => language.name)?.join(', ') ||
                      '-'}
                  </p>
                  <p>
                    <strong>Timezones: </strong>
                    {timezones?.join(', ')}
                  </p>
                  <p>
                    <strong>Area: </strong>
                    {area?.kilometers?.toLocaleString('en-US')}km&sup2;
                  </p>
                </div>
              </main>
              {borders?.length > 0 && (
                <BorderCountries bordersCodes={borders} />
              )}
            </article>
          </div>
        </div>
      )}
    </>
  )
}
