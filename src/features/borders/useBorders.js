import { useGetBordersNamesQuery } from '@/shared/api/countriesApi'

export function useBorders(bordersCodes) {
  return useGetBordersNamesQuery(bordersCodes, {
    selectFromResult: ({ data, ...rest }) => ({
      ...rest,
      borders: data?.map((data) => data?.objects?.[0]) ?? [],
    }),
  })
}
