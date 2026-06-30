export const selectAllCountries = (state) => state.countries.countries

export const selectCountryByAlpha3Code = (state, alpha3Code) =>
  state.countries.countries.find((country) => country.alpha3Code === alpha3Code)

export const selectBorderCountries = (state, borders = []) =>
  state.countries.countries.filter((country) =>
    borders.includes(country.alpha3Code),
  )

export const selectVisibleCountries = (state, search = '', region = '') => {
  const formattedSearch = search.toLowerCase()

  if (!search && !region) return state.countries.countries

  if (search && region)
    return state.countries.countries.filter(
      (country) =>
        country.region === region &&
        country.name.toLowerCase().includes(formattedSearch),
    )
  if (search)
    return state.countries.countries.filter((country) =>
      country.name.toLowerCase().includes(formattedSearch),
    )

  if (region)
    return state.countries.countries.filter(
      (country) => country.region === region,
    )
}
