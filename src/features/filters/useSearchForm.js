import { useController, useForm } from 'react-hook-form'
import { useSearch } from './useSearch'

export function useSearchForm() {
  const [search, setSearch] = useSearch()

  const { handleSubmit, control } = useForm({
    defaultValues: {
      search: search,
    },
    mode: 'onSubmit',
  })
  const { field, fieldState } = useController({
    name: 'search',
    control: control,
    rules: {
      pattern: {
        value: /^[A-Za-z ]+$/,
        message: 'This field can contain only latin symbols and spaces',
      },
    },
  })

  const onSubmit = (data) => setSearch(data.search.trim())

  return [
    { field, fieldState },
    { handleSubmit, onSubmit },
  ]
}
