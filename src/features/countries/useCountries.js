import { selectFilters } from '@/features/filters/filtersSlice'
import { useGetCountriesInfiniteQuery } from '@/shared/api/countriesApi'
import { useSelector } from 'react-redux'

export function useCountries() {
  const filters = useSelector(selectFilters)
  return useGetCountriesInfiniteQuery(filters, {
    selectFromResult: ({ data, ...rest }) => {
      return {
        ...rest,
        countries: data?.pages?.flatMap((page) => page?.objects) ?? [],
      }
    },
  })
}
