import { combineReducers } from 'redux'
import { countriesReducer } from './countries/countriesReducer'

export const rootReducer = combineReducers({
  countries: countriesReducer,
})
