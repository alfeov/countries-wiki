import { useDispatch } from 'react-redux'
import { toggleTheme } from '@/features/theme/themeSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectIsDarkTheme } from '@/features/theme/themeSlice'

export function useToggleTheme() {
  const dispatch = useDispatch()
  const isDarkTheme = useSelector(selectIsDarkTheme)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', isDarkTheme)
  }, [isDarkTheme])

  return () => dispatch(toggleTheme())
}
