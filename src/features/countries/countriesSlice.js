import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

export const loadCountries = createAsyncThunk(
  '@@countries/load',
  async (filters, { extra: { countriesApi } }) => {
    return await countriesApi.getCountriesByParams(filters)
    //  todo     .catch((error) => dispatch(setCountriesError(error)))
  },
  {
    condition: (_, { getState }) => getState().countries.status !== 'fetching',
  },
)

const countriesAdapter = createEntityAdapter({
  selectId: (country) => country.codes.alpha_3,
})

const countriesSlice = createSlice({
  name: '@@countries',
  initialState: countriesAdapter.getInitialState({
    status: 'idle',
    error: null,
  }),
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.status = 'fetching'
        state.error = null
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        countriesAdapter.addMany(state, action.payload)
        state.status = 'idle'
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.error
      })
  },
})

export const countriesReducer = countriesSlice.reducer
export const selectAllCountries = (state) => state.countries
export const countriesSelectors = countriesAdapter.getSelectors(
  (state) => state.countries,
)
