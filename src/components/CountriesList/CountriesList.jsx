import data from '@/mock/data.json'
import { CountryItem } from '@/components/CountryItem'
import styles from './CountriesList.module.scss'

export function CountriesList() {
  return (
    <div className={styles.list}>
      {data.slice(0, 9).map((country) => (
        <CountryItem key={country.alpha3Code} {...country} />
      ))}
    </div>
  )
}
