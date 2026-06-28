import data from '@/mock/data.json'
import { Country } from '@/components/Country'
import styles from './Countries.module.scss'

export function Countries() {
  return (
    <div className={styles.countries}>
      {data.slice(0, 9).map((country) => (
        <Country key={country.alpha3Code} {...country} />
      ))}
    </div>
  )
}
