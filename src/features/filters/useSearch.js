import { useDispatch, useSelector } from 'react-redux'
import {
  selectSearch,
  setSearch as setSearchAction,
} from '@/features/filters/filtersSlice'

export function useSearch() {
  const search = useSelector(selectSearch)
  const dispatch = useDispatch()

  const setSearch = (data) => dispatch(setSearchAction(data))

  return [search, setSearch]
}
