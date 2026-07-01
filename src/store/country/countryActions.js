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

let isFetching = false

export const loadCountry = (countryAlpha3Code) => (dispatch, getState) => {
  if (isFetching) return
  isFetching = true

  dispatch(setCountryFetching)

  const state = getState()

  const countryInCache = state.countries.countries.find(
    (country) => country.codes.alpha_3 === countryAlpha3Code,
  )

  if (countryInCache !== undefined) {
    dispatch(addCountry(countryInCache))
    return
  }

  countriesApi.getCountry(countryAlpha3Code).then((data) => {
    dispatch(addCountry(...data))
    dispatch(addCountries(data))
    isFetching = false
  })
}
