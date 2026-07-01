export const selectAllCountries = (state) => state.countries.countries

// TODO
export const selectCountryByAlpha3Code = (state, countryAlpha3Code) =>
  state.countries.countries.find(
    (country) => country.codes.alpha_3 === countryAlpha3Code,
  )

export const selectBorderCountries = (state, borders = []) =>
  state.countries.countries.filter((country) =>
    borders.includes(country.alpha3Code),
  )

export const selectVisibleCountries = (state, search = '', region = '') => {
  const formattedSearch = search.toLowerCase()

  if (!search && !region)
    return {
      ...state.countries,
      countries: state.countries.countries,
    }

  if (search && region)
    return {
      ...state.countries,
      countries: state.countries.countries.filter(
        (country) =>
          country.region === region &&
          country.names.common.toLowerCase().includes(formattedSearch),
      ),
    }

  if (search)
    return {
      ...state.countries,
      countries: state.countries.countries.filter((country) =>
        country.names.common.toLowerCase().includes(formattedSearch),
      ),
    }

  if (region)
    return {
      ...state.countries,
      countries: state.countries.countries.filter(
        (country) => country.region === region,
      ),
    }
}
