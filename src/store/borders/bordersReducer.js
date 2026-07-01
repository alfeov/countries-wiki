import {
  SET_BORDERS,
  SET_BORDERS_ERROR,
  SET_BORDERS_FETCHING,
} from './bordersActions'

const initialState = {
  borders: [],
  status: 'idle',
  error: null,
}

export const bordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BORDERS:
      return {
        borders: action.payload,
        status: 'idle',
        error: null,
      }
    case SET_BORDERS_FETCHING:
      return {
        ...state,
        status: 'fetching',
      }
    case SET_BORDERS_ERROR:
      return {
        ...state,
        status: 'idle',
        error: action.payload,
      }
    default:
      return state
  }
}
