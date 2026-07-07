import { CountryItem } from '@/features/countries/CountryItem'
import styles from './CountriesList.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilters } from '@/features/filters/filtersSlice'
import { useEffect } from 'react'
import { SpinnerEmpty } from '@/shared/ui/SpinnerEmpty'
import { ErrorEmpty } from '@/shared/ui/ErrorEmpty'
import {
  countriesSelectors,
  loadCountries,
  selectAllCountries,
} from '@/features/countries/countriesSlice'

export function CountriesList() {
  const dispatch = useDispatch()
  const filters = useSelector(selectFilters)
  const { status, error } = useSelector(selectAllCountries)
  const countries = useSelector(countriesSelectors.selectAll)

  useEffect(() => {
    dispatch(loadCountries(filters))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])

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
