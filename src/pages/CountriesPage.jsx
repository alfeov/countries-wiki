import { CountriesList } from '@/components/CountriesList'
import { FilterGroup } from '@/components/FilterGroup'
import { FilterSearch } from '@/components/FilterSearch'
import { FilterSelect } from '@/components/FilterSelect'

export function CountriesPage() {
  return (
    <div>
      <FilterGroup>
        <FilterSearch />
        <FilterSelect />
      </FilterGroup>
      <CountriesList />
    </div>
  )
}
