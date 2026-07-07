import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loadBorders = createAsyncThunk(
  '@@borders/load',
  async (borders, { extra: { countriesApi }, rejectWithValue }) => {
    try {
      const promises = borders?.map((border) =>
        countriesApi.getCountryName(border),
      )
      const data = await Promise.all(promises)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
  {
    condition: (_, { getState }) => getState().borders.status !== 'fetching',
  },
)

const bordersSlice = createSlice({
  name: '@@borders',
  initialState: {
    borders: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBorders.pending, (state) => {
        state.status = 'fetching'
        state.error = null
      })
      .addCase(loadBorders.fulfilled, (state, action) => {
        state.borders = action.payload
        state.status = 'idle'
      })
      .addCase(loadBorders.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload || action.error
      })
  },
})

export const bordersReducer = bordersSlice.reducer
export const selectAllBorders = (state) => state.borders
