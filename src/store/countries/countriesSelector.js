export const selectAllCountries = (state) => state.countries.countries

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
