import { CountryItem } from '@/features/countries/CountryItem'
import styles from './CountriesList.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllCountries } from '@/features/countries/countriesSelector'
import { selectSearch } from '@/features/search/searchSelectors'
import { selectRegion } from '@/features/region/regionSelectors'
import { useEffect } from 'react'
import { loadCountries } from '@/features/countries/countriesActions'
import { SpinnerEmpty } from '@/shared/ui/SpinnerEmpty'
import { ErrorEmpty } from '@/shared/ui/ErrorEmpty'

export function CountriesList() {
  const dispatch = useDispatch()
  const search = useSelector(selectSearch)
  const region = useSelector(selectRegion)
  const { countries, status, error } = useSelector(selectAllCountries)

  useEffect(() => {
    dispatch(loadCountries(search, region))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, region])

  return (
    <>
      {status === 'fetching' && <SpinnerEmpty>Loading countries</SpinnerEmpty>}
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
      )}
    </>
  )
}
