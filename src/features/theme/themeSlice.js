import {
  getLocalStorageData,
  setLocalStorageData,
} from '@/shared/helpers/localStorage'
import { isPreferredDarkTheme } from '@/shared/helpers/isPreferredDarkTheme'
import { createSlice } from '@reduxjs/toolkit'

const storageKey = 'countries-wiki/isDarkTheme'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkTheme: getLocalStorageData(storageKey) ?? isPreferredDarkTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      const isDarkTheme = !state.isDarkTheme
      state.isDarkTheme = isDarkTheme
      setLocalStorageData(storageKey, isDarkTheme)
    },
  },
  selectors: {
    selectIsDarkTheme: (state) => state.isDarkTheme,
  },
})

export const themeReducer = themeSlice.reducer
export const { toggleTheme } = themeSlice.actions
export const { selectIsDarkTheme } = themeSlice.selectors
