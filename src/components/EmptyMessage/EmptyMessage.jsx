import styles from './EmptyMessage.module.scss'

export function EmptyMessage({ children }) {
  return <p className={styles.message}>{children}</p>
}
