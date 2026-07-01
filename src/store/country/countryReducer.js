import { ADD_COUNTRY, COUNTRY_FETCHING } from './countryActions'

const initialState = {
  country: {},
  status: 'idle',
  error: null,
}

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return {
        ...state,
        status: 'idle',
        country: action.payload,
      }
    case COUNTRY_FETCHING:
      return {
        ...state,
        status: 'fetching',
      }
    default:
      return state
  }
}
