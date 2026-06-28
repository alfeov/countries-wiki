import { useState } from 'react'
import styles from './ImageWithLoader.module.scss'
import noImage from './no-image.png'

export function ImageWithLoader({
  noImageText,
  children,
  className,
  ...props
}) {
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
    <>
      {imgLoading && { children }}
      {!imgError ? (
        <img
          {...props}
          className={`${styles.img} ${className}`}
          style={{
            width: imgLoading ? '0' : '100%',
            opacity: imgLoading ? '0' : '1',
            ...props.style,
          }}
          loading='lazy'
          onError={handleError}
          onLoad={handleLoad}
        />
      ) : (
        <>
          <img
            {...props}
            className={`${styles.img} ${className}`}
            style={{
              width: imgLoading ? '0' : '100%',
              opacity: imgLoading ? '0' : '1',
            }}
            src={noImage}
            onLoad={handleLoad}
          />
          <p
            className={styles.noImgText}
            style={{
              width: imgLoading ? '0' : '100%',
              opacity: imgLoading ? '0' : '1',
            }}
          >
            {noImageText}
          </p>
        </>
      )}
    </>
  )
}
