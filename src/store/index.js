import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from './rootReducer'
import { withExtraArgument } from 'redux-thunk'
import { countriesApi } from '@/api/countriesApi'

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(withExtraArgument({ countriesApi }))),
)
