import { useState } from 'react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import styles from './Country.module.scss'
import noImage from '@/assets/images/no-image.png'
import { Skeleton } from '@/components/ui/skeleton'

export function Country(props) {
  const { flags, name, population, region, capital, alpha3Code } = props
  const [imgLoading, setImgLoading] = useState(true)
  const [imgError, setImgError] = useState(false)

  const handleError = ({ currentTarget }) => {
    currentTarget.onerror = null
    setImgError(true)
  }

  const handleLoad = () => {
    setImgLoading(false)
  }

  return (
    <Card className={styles.card}>
      <div className={styles.imgWrapper}>
        {imgLoading && <Skeleton className={styles.skeleton} />}
        {!imgError ? (
          <img
            src={flags.svg}
            alt={name}
            className={styles.img}
            style={{
              width: imgLoading ? '0' : '100%',
              opacity: imgLoading ? '0' : '1',
            }}
            loading='lazy'
            onError={handleError}
            onLoad={handleLoad}
          />
        ) : (
          <>
            <img
              className={styles.img}
              style={{
                width: imgLoading ? '0' : '100%',
                opacity: imgLoading ? '0' : '1',
              }}
              src={noImage}
              alt={name}
              onLoad={handleLoad}
            />
            <p
              className={styles.noImgText}
              style={{
                width: imgLoading ? '0' : '100%',
                opacity: imgLoading ? '0' : '1',
              }}
            >
              {name}
            </p>
          </>
        )}
      </div>
      <CardHeader className={styles.card__header}>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          <ul>
            <li>
              <strong>Population:</strong> {population.toLocaleString('en-US')}
            </li>
            <li>
              <strong>Region:</strong> {region}
            </li>
            <li>
              <strong>Capital:</strong> {capital}
            </li>
          </ul>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link to={alpha3Code} className='w-full'>
          <Button className='w-full'>View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
