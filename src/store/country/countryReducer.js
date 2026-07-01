import {
  ADD_COUNTRY,
  COUNTRY_FETCHING,
  SET_COUNTRY_ERROR,
} from './countryActions'

const initialState = {
  country: {},
  status: 'idle',
  error: null,
}

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return {
        country: action.payload,
        status: 'idle',
        error: null,
      }
    case COUNTRY_FETCHING:
      return {
        ...state,
        status: 'fetching',
      }
    case SET_COUNTRY_ERROR:
      return {
        ...state,
        status: 'idle',
        error: action.payload,
      }
    default:
      return state
  }
}
