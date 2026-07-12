import { Button } from '@/shared/ui/button'
import { Moon, Sun } from 'lucide-react'
import styles from './ThemeToggleButton.module.scss'
import { useToggleTheme } from '../useToggleTheme'

export function ThemeToggleButton() {
  const toggleTheme = useToggleTheme()

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={toggleTheme}
      aria-label='Toggle theme'
    >
      <Sun className={styles.sun} />
      <Moon className={styles.moon} />
    </Button>
  )
}
