import { Link, Outlet } from 'react-router'
import styles from './Layout.module.scss'
import { ThemeToggleButton } from '@/components/ui/ThemeToggleButton'

export function Layout() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to='/' className={styles.link}>
            Counties Wiki
          </Link>
          <ThemeToggleButton />
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}
