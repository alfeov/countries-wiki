import { countriesApi } from '@/api/countriesApi'
import { addCountries } from '../countries/countriesActions'

export const ADD_COUNTRY = 'ADD_COUNTRY'

const addCountry = (country) => ({
  type: ADD_COUNTRY,
  payload: country,
})

export const COUNTRY_FETCHING = 'COUNTRY_FETCHING'

const setCountryFetching = {
  type: COUNTRY_FETCHING,
}

export const SET_COUNTRY_ERROR = 'SET_COUNTRY_ERROR'

const setCountryError = (error) => ({
  type: SET_COUNTRY_ERROR,
  payload: error,
})

let isFetching = false
export const loadCountry = (countryAlpha3Code) => (dispatch) => {
  if (isFetching) return
  isFetching = true

  dispatch(setCountryFetching)

  countriesApi
    .getCountry(countryAlpha3Code)
    .then((data) => {
      if (data.length === 0)
        throw new Error(
          `Country with code ${countryAlpha3Code} not found (404)`,
        )
      dispatch(addCountry(...data))
    })
    .catch((error) => dispatch(setCountryError(error)))
    .finally(() => {
      isFetching = false
    })
}
