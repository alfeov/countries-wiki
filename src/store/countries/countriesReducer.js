import {
  ADD_COUNTRIES,
  SET_COUNTRIES_ERROR,
  SET_COUNTRIES_FETCHING,
} from './countriesActions'

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
    case SET_COUNTRIES_ERROR:
      return {
        ...state,
        status: 'idle',
        error: action.payload,
      }
    default:
      return state
  }
}
