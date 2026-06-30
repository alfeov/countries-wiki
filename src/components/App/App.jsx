import { RouterProvider } from 'react-router'
import { router } from './router'
import '@/styles/index.css'
import '@/styles/main.scss'
import { loadCountries } from '@/store/countries/countriesActions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme } from '@/store/theme/themeSelectors'

let didInit = false

function App() {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!didInit) {
      didInit = true

      dispatch(loadCountries())
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', theme)
  }, [theme])

  return <RouterProvider router={router} />
}

export default App
