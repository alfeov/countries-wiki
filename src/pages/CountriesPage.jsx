import { CountriesList } from '@/features/countries/CountriesList'
import { FilterGroup } from '@/shared/ui/FilterGroup'
import { FilterSearch } from '@/features/filters/FilterSearch'
import { FilterRegion } from '@/features/filters/FilterRegion'

export function CountriesPage() {
  return (
    <>
      <FilterGroup>
        <FilterSearch />
        <FilterRegion />
      </FilterGroup>
      <CountriesList />
    </>
  )
}
