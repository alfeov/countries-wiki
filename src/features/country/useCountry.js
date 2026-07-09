// import { useParams } from 'react-router'
// import { useDispatch, useSelector } from 'react-redux'
// import { useEffect } from 'react'
// import { loadCountry, selectCountry } from '@/features/country/countrySlice'

// export function useCountry() {
//   const dispatch = useDispatch()
//   const { country, status, error } = useSelector(selectCountry)

//   const params = useParams()
//   const countryCode = params.countryAlpha3Code

//   useEffect(() => {
//     dispatch(loadCountry(countryCode))
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [countryCode])

//   return { country, status, error, countryCode }
// }
