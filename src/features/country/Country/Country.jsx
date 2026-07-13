import { Link } from 'react-router'

import { motion } from 'motion/react'
import { createMotionedComponent, sideVariant } from '@/shared/lib/motion'

import { ImageWithLoader } from '@/shared/ui/ImageWithLoader'
import { Button } from '@/shared/ui/button'
import { Skeleton } from '@/shared/ui/skeleton'
import { ArrowLeft } from 'lucide-react'
import { BorderCountries } from '@/features/borders/BorderCountries'
import { SpinnerEmpty } from '@/shared/ui/SpinnerEmpty'
import { ErrorEmpty } from '@/shared/ui/ErrorEmpty'

import { useScrollToTop } from '@/features/country/useScrollToTop'
import { useCountry } from '@/features/country/useCountry'
import { FetchingIndicator } from '@/shared/ui/FetchingIndicator/FetchingIndicator'

const MotionLink = createMotionedComponent(Link)

export function Country() {
  useScrollToTop()
  const {
    country,
    countryCode,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    error,
  } = useCountry()

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
  } = country?.[0] ?? {}

  return (
    <>
      <FetchingIndicator
        conditions={!isLoading && isFetching}
        wrapperClassName='pt-[4rem] md:pt-[5rem]'
      />
      {isLoading && (
        <SpinnerEmpty>Loading country with code {countryCode}</SpinnerEmpty>
      )}
      {isError && <ErrorEmpty>{error.message || error.error}</ErrorEmpty>}
      {isSuccess && country.length === 0 && (
        <ErrorEmpty>Country with code {countryCode} not found (404)</ErrorEmpty>
      )}
      {isSuccess && country.length > 0 && (
        <div className='grid gap-[3rem] overflow-hidden'>
          <MotionLink
            to='/'
            className='w-fit rounded-4xl'
            {...sideVariant(-200)}
          >
            <Button tabIndex='-1'>
              <ArrowLeft data-icon='inline-start' />
              Back
            </Button>
          </MotionLink>
          <div className='grid gap-[3rem] lg:gap-[4rem] lg:grid-cols-2'>
            <motion.div {...sideVariant(-200)}>
              <ImageWithLoader
                src={flag?.url_png || 'errorSrc'}
                alt={names?.common}
                noImageText={names?.common}
                aspectRatio='3/2'
                wrapperClassName='rounded-2xl'
              >
                <Skeleton className='w-full bg-muted-foreground dark:bg-muted' />
              </ImageWithLoader>
            </motion.div>
            <motion.article
              {...sideVariant(200)}
              className='grid gap-[2rem] content-start'
            >
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
              {!!borders?.length && <BorderCountries bordersCodes={borders} />}
            </motion.article>
          </div>
        </div>
      )}
    </>
  )
}
