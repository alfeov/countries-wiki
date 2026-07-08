import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBorders, selectAllBorders } from '@/features/borders/bordersSlice'

export function useBorders(bordersCodes) {
  const { borders, status, error } = useSelector(selectAllBorders)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBorders(bordersCodes))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { borders, status, error }
}
