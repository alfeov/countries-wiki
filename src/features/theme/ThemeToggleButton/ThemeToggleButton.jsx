import { Button } from '@/shared/ui/button'
import { Moon, Sun } from 'lucide-react'
import styles from './ThemeToggleButton.module.scss'
import { useToggleTheme } from '../useToggleTheme'

export function ThemeToggleButton() {
  const toggleTheme = useToggleTheme()

  return (
    <Button variant='outline' size='icon' onClick={toggleTheme}>
      <Sun className={styles.sun} />
      <Moon className={styles.moon} />
      <span className={styles.srOnly}>Toggle theme</span>
    </Button>
  )
}
