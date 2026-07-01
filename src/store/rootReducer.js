import { combineReducers } from 'redux'
import { countriesReducer } from './countries/countriesReducer'
import { searchReducer } from './search/searchReducer'
import { regionReducer } from './region/regionReducer'
import { themeReducer } from './theme/themeReducer'
import { countryReducer } from './country/countryReducer'
import { bordersReducer } from './borders/bordersReducer'

export const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
  borders: bordersReducer,
  search: searchReducer,
  region: regionReducer,
  theme: themeReducer,
})
