import { SearchIcon } from 'lucide-react'
import { Field, FieldDescription } from '@/shared/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/shared/ui/input-group'
import { useSearchForm } from '@/features/filters/useSearchForm'

export function FilterSearch() {
  const [{ field, fieldState }, { handleSubmit, onSubmit }] = useSearchForm()

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='md:w-fit'
      autoComplete='off'
    >
      <Field data-invalid={fieldState.invalid} className='gap-[0.5rem]'>
        <InputGroup className='md:w-fit'>
          <InputGroupInput
            aria-invalid={fieldState.invalid}
            placeholder='Search for a country...'
            {...field}
          />
          <InputGroupAddon align='inline-end'>
            <InputGroupButton type='submit' aria-label='Search' size='icon-xs'>
              <SearchIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription className='h-[1.5em] ml-[0.5rem] text-destructive'>
          {fieldState.error?.message}
        </FieldDescription>
      </Field>
    </form>
  )
}
