import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  }),
  tagTypes: ['Countries', 'Country', 'Borders'],
  endpoints: (build) => ({
    getCountries: build.query({
      // query: ({ search = '', region = '' }) => {
      //   console.log(search, region)
      //   const params = {
      //     response_fields:
      //       'flag.url_png,names.common,codes.alpha_3,population,region,capitals',
      //   }
      //   if (search) params.q = search
      //   if (region) params.region = region

      //   return {
      //     url: '',
      //     params,
      //   }
      // },
      query: () => '',
      transformResponse: (res, meta, arg) => {
        console.log(res, meta, arg)
        return res.data.data
      },
      providesTags: ['Countries'],
    }),
    getCountry: build.query({
      query: (countryAlpha3Code) => `/codes.alpha_3/${countryAlpha3Code}`,
      transformResponse: (res) => res.data.data,
      providesTags: ['Country'],
    }),
    // getBordersName: build.query({
    // 	query:
    // })
  }),
})

export const { useGetCountriesQuery, useGetCountryQuery } = countriesApi

// import { api } from './api'

// export const countriesApi = {
//   getCountries: () => api.get().then((res) => res.data.data),
//   getCountry: (countryAlpha3Code) =>
//     api.get(`/codes.alpha_3/${countryAlpha3Code}`).then((res) => res.data.data),
//   getCountriesByParams: ({ search = '', region = '' }) => {
//     const params = {
//       response_fields:
//         'flag.url_png,names.common,codes.alpha_3,population,region,capitals',
//     }
//     if (search) params.q = search
//     if (region) params.region = region

//     return api.get('', { params }).then((res) => res.data.data)
//   },
//   getCountryName: (countryAlpha3Code) =>
//     api
//       .get(`/codes.alpha_3/${countryAlpha3Code}`, {
//         params: {
//           response_fields: 'names.common,codes.alpha_3',
//         },
//       })
//       .then((res) => res.data.data),
// }
