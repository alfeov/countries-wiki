import {
  getLocalStorageData,
  setLocalStorageData,
} from '@/shared/helpers/localStorage'
import { TOGGLE_THEME } from './themeActions'
import { isPreferredDarkTheme } from '@/shared/helpers/isPreferredDarkTheme'

const storageKey = 'countries-wiki/isDarkTheme'
const initialState = getLocalStorageData(storageKey) ?? isPreferredDarkTheme()

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const isDarkTheme = !state
      setLocalStorageData(storageKey, isDarkTheme)
      return isDarkTheme
    }
    default:
      return state
  }
}
