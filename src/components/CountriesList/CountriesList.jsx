import { CountryItem } from '@/components/CountryItem'
import styles from './CountriesList.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllCountries } from '@/store/countries/countriesSelector'
import { selectSearch } from '@/store/search/searchSelectors'
import { selectRegion } from '@/store/region/regionSelectors'
import { EmptyMessage } from '@/components/EmptyMessage'
import { useEffect } from 'react'
import { loadCountries } from '@/store/countries/countriesActions'

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
      {status === 'fetching' && <div>Loading...</div>}
      {status !== 'fetching' && error && (
        <EmptyMessage>{error.message}</EmptyMessage>
      )}
      {status !== 'fetching' && !error && countries?.length === 0 && (
        <EmptyMessage>There are no countries for your query</EmptyMessage>
      )}
      {status !== 'fetching' && !error && (
        <div className={styles.list}>
          {countries?.map((country) => (
            <CountryItem key={country.codes.alpha_3} {...country} />
          ))}
        </div>
      )}
    </>
  )
}
