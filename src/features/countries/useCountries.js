// import { useDispatch, useSelector } from 'react-redux'
// import { selectFilters } from '@/features/filters/filtersSlice'
// import { useEffect } from 'react'
// import {
//   countriesSelectors,
//   loadCountries,
//   selectAllCountries,
// } from '@/features/countries/countriesSlice'

// export function useCountries() {
//   const dispatch = useDispatch()
//   const filters = useSelector(selectFilters)
//   const { status, error } = useSelector(selectAllCountries)
//   const countries = useSelector(countriesSelectors.selectAll)

//   useEffect(() => {
//     dispatch(loadCountries(filters))
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [filters])

//   return { countries, status, error }
// }
