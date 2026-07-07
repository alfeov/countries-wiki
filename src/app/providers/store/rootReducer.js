import { combineReducers } from 'redux'
import { themeReducer } from '@/features/theme/themeSlice'
import { countryReducer } from '@/features/country/countryReducer'
import { bordersReducer } from '@/features/borders/bordersReducer'
import { filtersReducer } from '@/features/filters/filtersSlice'
import { countriesReducer } from '@/features/countries/countriesSlice'

export const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
  borders: bordersReducer,
  filters: filtersReducer,
  theme: themeReducer,
})
