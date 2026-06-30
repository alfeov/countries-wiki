import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import styles from './ThemeToggleButton.module.scss'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '@/store/theme/themeActions'

export function ThemeToggleButton() {
  const dispatch = useDispatch()

  return (
    <Button variant='outline' size='icon' onClick={() => dispatch(toggleTheme)}>
      <Sun className={styles.sun} />
      <Moon className={styles.moon} />
      <span className={styles.srOnly}>Toggle theme</span>
    </Button>
  )
}
