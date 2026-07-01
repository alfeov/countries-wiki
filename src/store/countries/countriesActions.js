import { countriesApi } from '@/api/countriesApi'
export const ADD_COUNTRIES = 'ADD_COUNTRIES'

export const addCountries = (countries) => ({
  type: ADD_COUNTRIES,
  payload: countries,
})

export const SET_COUNTRIES_FETCHING = 'SET_COUNTRIES_FETCHING'

const setCountriesFetching = {
  type: SET_COUNTRIES_FETCHING,
}

export const SET_COUNTRIES_ERROR = 'SET_COUNTRIES_ERROR'

const setCountriesError = (error) => ({
  type: SET_COUNTRIES_ERROR,
  payload: error,
})

let isFetching = false
export const loadCountries = (search, region) => (dispatch) => {
  if (isFetching) return
  isFetching = true
  dispatch(setCountriesFetching)
  countriesApi
    .getCountriesByParams(search, region)
    .then((data) => {
      dispatch(addCountries(data))
    })
    .catch((error) => dispatch(setCountriesError(error)))
    .finally(() => {
      isFetching = false
    })
}
