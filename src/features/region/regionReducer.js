import { SET_REGION } from './regionActions'

export const regionReducer = (state = '', action) => {
  switch (action.type) {
    case SET_REGION:
      return action.payload
    default:
      return state
  }
}
