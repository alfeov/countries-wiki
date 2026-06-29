import { RouterProvider } from 'react-router'
import { router } from './router'
import '@/styles/index.css'
import '@/styles/main.scss'
import { loadCountries } from '@/store/countries/countriesActions'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

let didInit = false

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!didInit) {
      didInit = true
      dispatch(loadCountries())
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <RouterProvider router={router} />
}

export default App
