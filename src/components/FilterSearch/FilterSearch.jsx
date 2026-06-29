import { SearchIcon } from 'lucide-react'
import { Field, FieldDescription, FieldError } from '@/components/ui/field'
import { useController, useForm } from 'react-hook-form'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '../ui/input-group'

export function FilterSearch() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      search: '',
    },
    mode: 'onBlur',
  })
  const {
    field: search,
    fieldState: { error, isDirty, invalid },
  } = useController({
    name: 'search',
    control: control,
    rules: {
      required: {
        value: true,
        message: 'This field is required',
      },
      pattern: {
        value: /^[A-Za-z ]+$/,
        message: 'This field can contain only latin symbols and spaces',
      },
    },
  })

  const onSubmit = (data) => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='md:w-fit'
      autoComplete='off'
    >
      <Field data-invalid={invalid && isDirty} className='gap-[0.5rem]'>
        <InputGroup className='md:w-fit'>
          <InputGroupInput
            aria-invalid={invalid && isDirty}
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
          {isDirty && error?.message}
        </FieldDescription>
      </Field>
    </form>
  )
}
