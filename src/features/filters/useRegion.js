import { useDispatch, useSelector } from 'react-redux'
import {
  selectRegion,
  setRegion as setRegionAction,
} from '@/features/filters/filtersSlice'

export function useRegion() {
  const region = useSelector(selectRegion)
  const dispatch = useDispatch()

  const setRegion = (data) => dispatch(setRegionAction(data))

  return [region, setRegion]
}
