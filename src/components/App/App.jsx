import { RouterProvider } from 'react-router'
import { router } from './router'
import '@/styles/index.css'
import '@/styles/main.scss'

function App() {
  return <RouterProvider router={router} />
}

export default App
