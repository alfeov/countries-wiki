import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loadCountry = createAsyncThunk(
  '@@country/load',
  async (countryAlpha3Code, { extra: { countriesApi }, rejectWithValue }) => {
    try {
      const data = await countriesApi.getCountry(countryAlpha3Code)
      if (data.meta.total === 0) {
        throw new Error(
          `Country with code ${countryAlpha3Code} not found (404)`,
        )
      }
      return data
    } catch (error) {
      console.error(error)
      return rejectWithValue(error)
    }
  },
  {
    condition: (_, { getState }) => getState().country.status !== 'fetching',
  },
)

const countrySlice = createSlice({
  name: '@@country',
  initialState: {
    country: {},
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountry.pending, (state) => {
        state.status = 'fetching'
        state.error = null
      })
      .addCase(loadCountry.fulfilled, (state, action) => {
        state.country = action.payload.objects[0]
        state.status = 'idle'
      })
      .addCase(loadCountry.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload || action.error
      })
  },
})

export const countryReducer = countrySlice.reducer
export const selectCountry = (state) => state.country
