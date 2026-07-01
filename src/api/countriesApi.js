import { api } from './api'

export const countriesApi = {
  getCountries: () => api.get().then((res) => res.data.data.objects),
}
