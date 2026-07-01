import { api } from './api'

export const countriesApi = {
  getCountries: () => api.get().then((res) => res.data.data.objects),
  getCountry: (countryAlpha3Code) =>
    api
      .get(`/codes.alpha_3/${countryAlpha3Code}`)
      .then((res) => res.data.data.objects),
  getCountriesByParams: (search = '', region = '') => {
    const params = {}
    if (search) params.q = search
    if (region) params.region = region

    return api.get('', { params }).then((res) => res.data.data.objects)
  },
}
