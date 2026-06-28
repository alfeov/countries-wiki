import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ButtonGroup } from '../ui/button-group'
import { SearchIcon } from 'lucide-react'

export function FilterSearch() {
  return (
    <ButtonGroup className='w-full md:w-fit'>
      <Input placeholder='Search for a country...' className='bg-input' />
      <Button variant='outline' aria-label='Search' className='bg-input'>
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}
