import { Button } from '@/shared/ui/button'
import { Moon, Sun } from 'lucide-react'
import styles from './ThemeToggleButton.module.scss'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '@/features/theme/themeSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectIsDarkTheme } from '@/features/theme/themeSlice'

export function ThemeToggleButton() {
  const dispatch = useDispatch()
  const isDarkTheme = useSelector(selectIsDarkTheme)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', isDarkTheme)
  }, [isDarkTheme])

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => dispatch(toggleTheme())}
    >
      <Sun className={styles.sun} />
      <Moon className={styles.moon} />
      <span className={styles.srOnly}>Toggle theme</span>
    </Button>
  )
}
