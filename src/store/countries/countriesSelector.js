export const selectAllCountries = (store) => store.countries

export const selectCountryByAlpha3Code = (store, alpha3Code) =>
  store.countries.countries.find((country) => country.alpha3Code === alpha3Code)

export const selectBorderCountries = (store, borders) =>
  store.countries.countries.filter((country) =>
    borders.includes(country.alpha3Code),
  )

export const selectVisibleCountries = (store, search, select) =>
  store.countries.countries.filter(
    (country) => country.name.includes(search) && country.region === select,
  )
