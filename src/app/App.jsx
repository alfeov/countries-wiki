import { Provider } from 'react-redux'
import { store } from './providers/store/index.js'
import { RouterProvider } from 'react-router'
import { router } from './providers/router/router.js'
import './styles/tailwind/index.css'
import './styles/base/index.scss'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
