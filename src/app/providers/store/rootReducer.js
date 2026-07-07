import { combineReducers } from 'redux'
import { themeReducer } from '@/features/theme/themeSlice'
import { filtersReducer } from '@/features/filters/filtersSlice'
import { countriesReducer } from '@/features/countries/countriesSlice'
import { countryReducer } from '@/features/country/countrySlice'
import { bordersReducer } from '@/features/borders/bordersSlice'

export const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
  borders: bordersReducer,
  filters: filtersReducer,
  theme: themeReducer,
})
