import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: '@@filters',
  initialState: {
    search: '',
    region: '',
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setRegion: (state, action) => {
      state.region = action.payload
    },
  },
})

export const filtersReducer = filtersSlice.reducer
export const { setSearch, setRegion } = filtersSlice.actions

export const selectFilters = (state) => state.filters
export const selectSearch = (state) => state.filters.search
export const selectRegion = (state) => state.filters.region
