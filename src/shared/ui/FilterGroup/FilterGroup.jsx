import styles from './FilterGroup.module.scss'

export function FilterGroup({ children }) {
  return <div className={styles.group}>{children}</div>
}
