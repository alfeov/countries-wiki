import { combineReducers } from 'redux'
import { countriesReducer } from './countries/countriesReducer'
import { searchReducer } from './search/searchReducer'
import { regionReducer } from './region/regionReducer'
import { themeReducer } from './theme/themeReducer'
import { countryReducer } from './country/countryReducer'

export const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
  search: searchReducer,
  region: regionReducer,
  theme: themeReducer,
})
