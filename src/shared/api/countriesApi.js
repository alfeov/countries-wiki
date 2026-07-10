import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import data from '@/shared/mock/data2.json'
// import { wait } from '../helpers/wait'

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
    getCountries: build.infiniteQuery({
      infiniteQueryOptions: {
        initialPageParam: {
          offset: 0,
          limit: 25,
        },
        getNextPageParam: (lastPage, _, lastPageParam) => {
          const nextOffset = lastPageParam.offset + lastPageParam.limit
          const remainingItems = lastPage?.meta.total - nextOffset

          if (remainingItems <= 0) {
            return undefined
          }

          return {
            ...lastPageParam,
            offset: nextOffset,
          }
        },
      },
      query: ({
        pageParam: { offset, limit },
        queryArg: { search = '', region = '' } = {},
      }) => {
        const params = {
          response_fields:
            'flag.url_png,names.common,codes.alpha_3,population,region,capitals',
          offset,
          limit,
        }
        if (search) params.q = search
        if (region) params.region = region

        return {
          url: '',
          params,
        }
      },
      // queryFn: async () => {
      //   await wait(1000)
      //   return { data: data.data }
      // },
      transformResponse: (res) => res.data,
      providesTags: ['Countries'],
    }),
    getCountry: build.query({
      query: (countryAlpha3Code) => `/codes.alpha_3/${countryAlpha3Code}`,
      // queryFn: async () => {
      //   await wait(3000)
      //   return { data: data.data }
      // },
      transformResponse: (res) => res.data,
      providesTags: ['Country'],
    }),
    getBordersNames: build.query({
      // queryFn: async () => {
      //   await wait(3000)
      //   const result1 = { data: { data: { objects: [data.data.objects[2]] } } }
      //   const result2 = { data: { data: { objects: [data.data.objects[3]] } } }
      //   return { data: [result1, result2] }
      // },
      queryFn: async (bordersCodes, _, __, fetchWithBQ) => {
        const promises = bordersCodes.map((code) =>
          fetchWithBQ({
            url: `/codes.alpha_3/${code}`,
            params: {
              response_fields: 'names.common,codes.alpha_3',
            },
          }),
        )

        const result = {}

        await Promise.all(promises)
          .then((data) => (result.data = data))
          .catch((error) => (result.error = error))

        return result.data ? { data: result.data } : { error: result.error }
      },
      providesTags: ['Borders'],
    }),
  }),
})

export const {
  useGetCountriesInfiniteQuery,
  useGetCountryQuery,
  useGetBordersNamesQuery,
} = countriesApi
