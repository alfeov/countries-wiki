import { countriesApi } from '@/api/countriesApi'

export const SET_BORDERS = 'SET_BORDERS'

const setBorders = (borders) => ({
  type: SET_BORDERS,
  payload: borders,
})

export const SET_BORDERS_FETCHING = 'SET_BORDERS_FETCHING'

const setBordersFetching = {
  type: SET_BORDERS_FETCHING,
}

export const SET_BORDERS_ERROR = 'SET_BORDERS_ERROR'

const setBordersError = (error) => ({
  type: SET_BORDERS_ERROR,
  payload: error,
})

let isFetching = false
export const loadBorders = (borders) => (dispatch) => {
  if (isFetching) return
  isFetching = true

  dispatch(setBordersFetching)

  const promises = borders.map((border) => countriesApi.getCountryName(border))

  Promise.all(promises)
    .then((data) => {
      dispatch(setBorders(data))
    })
    .catch((error) => dispatch(setBordersError(error)))
    .finally(() => {
      isFetching = false
    })
}
