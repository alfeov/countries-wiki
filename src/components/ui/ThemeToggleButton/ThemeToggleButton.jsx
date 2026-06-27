import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import styles from './ThemeToggleButton.module.scss'

export function ThemeToggleButton() {
  return (
    <Button variant='outline' size='icon'>
      <Sun className={styles.sun} />
      <Moon className={styles.moon} />
      <span className={styles.srOnly}>Toggle theme</span>
    </Button>
  )
}
