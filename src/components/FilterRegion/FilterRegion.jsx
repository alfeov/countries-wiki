import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { setRegion } from '@/store/region/regionActions'
import { selectRegion } from '@/store/region/regionSelectors'
import { useDispatch, useSelector } from 'react-redux'

export function FilterRegion() {
  const region = useSelector(selectRegion)
  const dispatch = useDispatch()

  return (
    <Select
      value={region}
      onValueChange={(value) => dispatch(setRegion(value))}
    >
      <SelectTrigger className='w-full md:max-w-60 bg-input'>
        <SelectValue placeholder='Select a Region' />
      </SelectTrigger>
      <SelectContent position='popper'>
        <SelectGroup>
          <SelectLabel>Regions</SelectLabel>
          <SelectItem value=''>All</SelectItem>
          <SelectItem value='Africa'>Africa</SelectItem>
          <SelectItem value='Americas'>America</SelectItem>
          <SelectItem value='Asia'>Asia</SelectItem>
          <SelectItem value='Europe'>Europe</SelectItem>
          <SelectItem value='Oceania'>Oceania</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
