import { countriesApi } from '@/api/countriesApi'
export const ADD_COUNTRIES = 'ADD_COUNTRIES'

const addCountries = (countries) => ({
  type: ADD_COUNTRIES,
  payload: countries,
})

export const SET_COUNTRIES_FETCHING = 'SET_COUNTRIES_FETCHING'

const setCountriesFetching = {
  type: SET_COUNTRIES_FETCHING,
}

export const loadCountries = () => (dispatch) => {
  dispatch(setCountriesFetching)

  countriesApi.getCountries().then((data) => dispatch(addCountries(data)))
}

// export const loadCountry = (countryAlpha3Code) => (dispatch) => {

// }
