import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.restcountries.com/countries/v5',
  headers: {
    Authorization: 'Bearer rc_live_9fc01d3004234ece86ffa4c6841a58c6',
  },
})
