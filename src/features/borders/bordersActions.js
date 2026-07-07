export const SET_BORDERS = 'SET_BORDERS'
export const SET_BORDERS_FETCHING = 'SET_BORDERS_FETCHING'
export const SET_BORDERS_ERROR = 'SET_BORDERS_ERROR'

const setBorders = (borders) => ({
  type: SET_BORDERS,
  payload: borders,
})

const setBordersFetching = {
  type: SET_BORDERS_FETCHING,
}

const setBordersError = (error) => ({
  type: SET_BORDERS_ERROR,
  payload: error,
})

let isFetching = false
export const loadBorders =
  (borders = []) =>
  (dispatch, getState, { countriesApi }) => {
    if (isFetching) return
    isFetching = true

    dispatch(setBordersFetching)

    const promises = borders?.map((border) =>
      countriesApi.getCountryName(border),
    )

    Promise.all(promises)
      .then((data) => {
        dispatch(setBorders(data))
      })
      .catch((error) => dispatch(setBordersError(error)))
      .finally(() => {
        isFetching = false
      })
  }
