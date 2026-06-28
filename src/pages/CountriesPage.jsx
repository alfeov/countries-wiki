import { Countries } from '@/components/Countries'
import { FilterGroup } from '@/components/FilterGroup'
import { FilterSearch } from '@/components/FilterSearch'
import { FilterSelect } from '@/components/FilterSelect'

export function CountriesPage() {
  return (
    <div className='flex flex-col gap-[4rem]'>
      <FilterGroup>
        <FilterSearch />
        <FilterSelect />
      </FilterGroup>
      <Countries />
    </div>
  )
}
