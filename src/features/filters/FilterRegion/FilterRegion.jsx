import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'
import { useRegion } from '@/features/filters/useRegion'

export function FilterRegion() {
  const [region, setRegion] = useRegion()

  return (
    <Select value={region} onValueChange={(value) => setRegion(value)}>
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
