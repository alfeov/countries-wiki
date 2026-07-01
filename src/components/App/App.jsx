import { RouterProvider } from 'react-router'
import { router } from './router'
import '@/styles/index.css'
import '@/styles/main.scss'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '@/store/theme/themeSelectors'

function App() {
  const theme = useSelector(selectTheme)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', theme)
  }, [theme])

  return <RouterProvider router={router} />
}

export default App
