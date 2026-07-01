import { CountryItem } from '@/components/CountryItem'
import styles from './CountriesList.module.scss'
import { useSelector } from 'react-redux'
import { selectVisibleCountries } from '@/store/countries/countriesSelector'
import { selectSearch } from '@/store/search/searchSelectors'
import { selectRegion } from '@/store/region/regionSelectors'
import { EmptyMessage } from '@/components/EmptyMessage'

export function CountriesList() {
  const search = useSelector(selectSearch)
  const region = useSelector(selectRegion)
  const { countries, status, error } = useSelector((state) =>
    selectVisibleCountries(state, search, region),
  )

  return (
    <>
      <div className={styles.list}>
        {countries?.map((country) => (
          <CountryItem key={country.codes.alpha_3} {...country} />
        ))}
      </div>
      {countries?.length === 0 && (search || region) && (
        <EmptyMessage>There are no countries for your query</EmptyMessage>
      )}
    </>
  )
}
