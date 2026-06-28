import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function FilterSelect() {
  return (
    <Select>
      <SelectTrigger className='w-full md:max-w-60 bg-input'>
        <SelectValue placeholder='Select a Region' />
      </SelectTrigger>
      <SelectContent position='popper'>
        <SelectGroup>
          <SelectLabel>Regions</SelectLabel>
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
