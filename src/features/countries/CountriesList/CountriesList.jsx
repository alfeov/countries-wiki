import { CountryItem } from '@/features/countries/CountryItem'
import styles from './CountriesList.module.scss'
import { SpinnerEmpty } from '@/shared/ui/SpinnerEmpty'
import { ErrorEmpty } from '@/shared/ui/ErrorEmpty'
import { useGetCountriesQuery } from '@/shared/api/countriesApi'
// import { useCountries } from '@/features/countries/useCountries'

export function CountriesList() {
  // const { countries, status, error } = useCountries()
  const { data, isLoading, error } = useGetCountriesQuery()

  console.log(data)

  return (
    <>
      {/* {status === 'fetching' && <SpinnerEmpty>Loading countries</SpinnerEmpty>}
      {status === 'error' && <ErrorEmpty>{error.message}</ErrorEmpty>}
      {status === 'idle' && countries?.length === 0 && (
        <ErrorEmpty>There are no countries for your query</ErrorEmpty>
      )}
      {status === 'idle' && (
        <div className={styles.list}>
          {countries?.map((country) => (
            <CountryItem key={country.codes.alpha_3} {...country} />
          ))}
        </div>
      )} */}
    </>
  )
}
