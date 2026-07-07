import { api } from './api'

export const countriesApi = {
  getCountries: () => api.get().then((res) => res.data.data.objects),
  getCountry: (countryAlpha3Code) =>
    api
      .get(`/codes.alpha_3/${countryAlpha3Code}`)
      .then((res) => res.data.data.objects),
  getCountriesByParams: ({ search = '', region = '' }) => {
    const params = {
      response_fields:
        'flag.url_png,names.common,codes.alpha_3,population,region,capitals',
    }
    if (search) params.q = search
    if (region) params.region = region

    return api.get('', { params }).then((res) => res.data.data.objects)
  },
  getCountryName: (countryAlpha3Code) =>
    api
      .get(`/codes.alpha_3/${countryAlpha3Code}`, {
        params: {
          response_fields: 'names.common,codes.alpha_3',
        },
      })
      .then((res) => res.data.data.objects),
}
