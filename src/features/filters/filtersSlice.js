import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
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
  selectors: {
    selectFilters: (state) => state,
    selectSearch: (state) => state.search,
    selectRegion: (state) => state.region,
  },
})

export const filtersReducer = filtersSlice.reducer
export const { setSearch, setRegion } = filtersSlice.actions
export const { selectFilters, selectRegion, selectSearch } =
  filtersSlice.selectors
