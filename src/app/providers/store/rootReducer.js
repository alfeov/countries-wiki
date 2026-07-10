import { themeReducer } from '@/features/theme/themeSlice'
import { filtersReducer } from '@/features/filters/filtersSlice'
import { countriesApi } from '@/shared/api/countriesApi'
import { combineSlices } from '@reduxjs/toolkit'

export const rootReducer = combineSlices(countriesApi, {
  filters: filtersReducer,
  theme: themeReducer,
})
