import { useParams } from 'react-router'
import { useGetCountryQuery } from '@/shared/api/countriesApi'

export function useCountry() {
  const params = useParams()
  const countryCode = params.countryAlpha3Code
  const country = useGetCountryQuery(countryCode, {
    selectFromResult: ({ data, ...rest }) => ({
      ...rest,
      country: data?.objects ?? [],
    }),
  })
  return { ...country, countryCode }
}
