import { CountryItem } from '@/features/countries/CountryItem'
import styles from './CountriesList.module.scss'
import { SpinnerEmpty } from '@/shared/ui/SpinnerEmpty'
import { ErrorEmpty } from '@/shared/ui/ErrorEmpty'
import { useCountries } from '../useCountries'
import { Button } from '@/shared/ui/button'
import { FetchingIndicator } from '@/shared/ui/FetchingIndicator/FetchingIndicator'
import {
  createMotionedComponent,
  itemVariants,
  listVariant,
} from '@/shared/lib/motion'
import { motion } from 'motion/react'

const MotionCountryItem = createMotionedComponent(CountryItem)

export function CountriesList() {
  const {
    countries,
    isFetching,
    isLoading,
    isError,
    isSuccess,
    error,
    hasNextPage,
    fetchNextPage,
  } = useCountries()

  return (
    <>
      <FetchingIndicator
        conditions={!isLoading && isFetching}
        wrapperClassName='pt-[14.5rem] md:pt-[7rem]'
      />
      {isLoading && <SpinnerEmpty>Loading countries</SpinnerEmpty>}
      {isError && <ErrorEmpty>{error.message}</ErrorEmpty>}
      {isSuccess && countries?.length === 0 && (
        <ErrorEmpty>There are no countries for your query</ErrorEmpty>
      )}
      {isSuccess && (
        <motion.div {...listVariant()} className={styles.list}>
          {countries?.map((country) => (
            <MotionCountryItem
              variants={itemVariants}
              key={country.codes.alpha_3}
              {...country}
            />
          ))}
        </motion.div>
      )}
      {isSuccess && hasNextPage && (
        <Button onClick={fetchNextPage}>Load more countries</Button>
      )}
    </>
  )
}
