import { ADD_COUNTRIES, SET_COUNTRIES_FETCHING } from './countriesActions'

const initialState = {
  countries: [],
  status: 'idle',
  error: null,
}

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        status: 'idle',
      }
    case SET_COUNTRIES_FETCHING:
      return {
        ...state,
        status: 'fetching',
      }
    default:
      return state
  }
}
