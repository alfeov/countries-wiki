import { combineReducers } from 'redux'
import { countriesReducer } from './countries/countriesReducer'
import { searchReducer } from './search/searchReducer'
import { regionReducer } from './region/regionReducer'

export const rootReducer = combineReducers({
  countries: countriesReducer,
  search: searchReducer,
  region: regionReducer,
})
