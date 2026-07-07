import { combineReducers } from 'redux'
import { countriesReducer } from '@/features/countries/countriesReducer'
import { searchReducer } from '@/features/search/searchReducer'
import { regionReducer } from '@/features/region/regionReducer'
import { themeReducer } from '@/features/theme/themeReducer'
import { countryReducer } from '@/features/country/countryReducer'
import { bordersReducer } from '@/features/borders/bordersReducer'

export const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
  borders: bordersReducer,
  search: searchReducer,
  region: regionReducer,
  theme: themeReducer,
})
