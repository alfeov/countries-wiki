import { SearchIcon } from 'lucide-react'
import { Field, FieldDescription } from '@/shared/ui/field'
import { useController, useForm } from 'react-hook-form'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/shared/ui/input-group'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearch } from '@/features/search/searchSelectors'
import { setSearch } from '@/features/search/searchActions'

export function FilterSearch() {
  const searchState = useSelector(selectSearch)
  const dispatch = useDispatch()
  const { handleSubmit, control } = useForm({
    defaultValues: {
      search: searchState,
    },
    mode: 'onSubmit',
  })
  const {
    field: search,
    fieldState: { error, invalid },
  } = useController({
    name: 'search',
    control: control,
    rules: {
      pattern: {
        value: /^[A-Za-z ]+$/,
        message: 'This field can contain only latin symbols and spaces',
      },
    },
  })

  const onSubmit = (data) => dispatch(setSearch(data.search.trim()))

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='md:w-fit'
      autoComplete='off'
    >
      <Field data-invalid={invalid} className='gap-[0.5rem]'>
        <InputGroup className='md:w-fit'>
          <InputGroupInput
            aria-invalid={invalid}
            placeholder='Search for a country...'
            {...search}
          />
          <InputGroupAddon align='inline-end'>
            <InputGroupButton type='submit' aria-label='Search' size='icon-xs'>
              <SearchIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription className='h-[1.5em] ml-[0.5rem] text-destructive'>
          {error?.message}
        </FieldDescription>
      </Field>
    </form>
  )
}
