import { CountryItem } from '@/components/CountryItem'
import styles from './CountriesList.module.scss'
import { useSelector } from 'react-redux'
import { selectAllCountries } from '@/store/countries/countriesSelector'

export function CountriesList() {
  const { countries } = useSelector(selectAllCountries)

  return (
    <div className={styles.list}>
      {countries.slice(0, 10).map((country) => (
        <CountryItem key={country.alpha3Code} {...country} />
      ))}
    </div>
  )
}
