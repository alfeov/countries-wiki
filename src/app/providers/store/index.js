import { rootReducer } from './rootReducer'
import { countriesApi } from '@/shared/api/countriesApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.PROD !== 'production',
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   thunk: {
    //     extraArgument: { countriesApi },
    //   },
    //   serializableCheck: false,
    // }),
    getDefaultMiddleware().concat(countriesApi.middleware),
})
