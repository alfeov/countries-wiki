import { Button } from '@/shared/ui/button'
import { Moon, Sun } from 'lucide-react'
import styles from './ThemeToggleButton.module.scss'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '@/features/theme/themeActions'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '@/features/theme/themeSelectors'

export function ThemeToggleButton() {
  const dispatch = useDispatch()
  const theme = useSelector(selectTheme)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', theme)
  }, [theme])

  return (
    <Button variant='outline' size='icon' onClick={() => dispatch(toggleTheme)}>
      <Sun className={styles.sun} />
      <Moon className={styles.moon} />
      <span className={styles.srOnly}>Toggle theme</span>
    </Button>
  )
}
