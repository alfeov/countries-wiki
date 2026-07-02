import {
  SET_COUNTRY,
  SET_COUNTRY_FETCHING,
  SET_COUNTRY_ERROR,
} from './countryActions'

const initialState = {
  country: {},
  status: 'idle',
  error: null,
}

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        country: action.payload,
        status: 'idle',
        error: null,
      }
    case SET_COUNTRY_FETCHING:
      return {
        ...state,
        status: 'fetching',
      }
    case SET_COUNTRY_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload,
      }
    default:
      return state
  }
}
