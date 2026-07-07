import { CountriesList } from '@/features/countries/CountriesList'
import { FilterGroup } from '@/shared/ui/FilterGroup'
import { FilterSearch } from '@/features/search/FilterSearch'
import { FilterRegion } from '@/features/region/FilterRegion'

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
