export const SET_COUNTRY = 'SET_COUNTRY'
export const SET_COUNTRY_FETCHING = 'SET_COUNTRY_FETCHING'
export const SET_COUNTRY_ERROR = 'SET_COUNTRY_ERROR'

const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
})

const setCountryFetching = {
  type: SET_COUNTRY_FETCHING,
}

const setCountryError = (error) => ({
  type: SET_COUNTRY_ERROR,
  payload: error,
})

let isFetching = false
export const loadCountry =
  (countryAlpha3Code) =>
  (dispatch, getState, { countriesApi }) => {
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
        dispatch(setCountry(...data))
      })
      .catch((error) => dispatch(setCountryError(error)))
      .finally(() => {
        isFetching = false
      })
  }
