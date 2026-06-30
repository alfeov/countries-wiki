import { CountriesList } from '@/components/CountriesList'
import { FilterGroup } from '@/components/FilterGroup'
import { FilterSearch } from '@/components/FilterSearch'
import { FilterRegion } from '@/components/FilterRegion'

export function CountriesPage() {
  return (
    <div>
      <FilterGroup>
        <FilterSearch />
        <FilterRegion />
      </FilterGroup>
      <CountriesList />
    </div>
  )
}
