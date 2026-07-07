export const SET_COUNTRIES = 'SET_COUNTRIES'
export const SET_COUNTRIES_FETCHING = 'SET_COUNTRIES_FETCHING'
export const SET_COUNTRIES_ERROR = 'SET_COUNTRIES_ERROR'

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
})

const setCountriesFetching = {
  type: SET_COUNTRIES_FETCHING,
}

const setCountriesError = (error) => ({
  type: SET_COUNTRIES_ERROR,
  payload: error,
})

let isFetching = false
export const loadCountries =
  (filters) =>
  (dispatch, _, { countriesApi }) => {
    if (isFetching) return
    isFetching = true

    dispatch(setCountriesFetching)
    countriesApi
      .getCountriesByParams(filters)
      .then((data) => {
        dispatch(setCountries(data))
      })
      .catch((error) => dispatch(setCountriesError(error)))
      .finally(() => {
        isFetching = false
      })
  }
