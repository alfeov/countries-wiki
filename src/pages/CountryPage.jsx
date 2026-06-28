import { Button } from '@/components/ui/button'
import data from '@/mock/data.json'
import { ArrowLeft } from 'lucide-react'
import { useParams } from 'react-router'
export function CountryPage() {
  const params = useParams()
  const country = data.find((data) => data.alpha3Code === params.alpha3Code)

  return (
    <>
      <div>
        <Button variant='outline'>
          <ArrowLeft data-icon='inline-start' />
          Back
        </Button>
      </div>
    </>
  )
}

// name
// nativeName
// population
// region
// subregion
// capital
//
// topLevelDomain
// currencies.[].name
// languages.[].name
//
// borders[]
// alpha3Code
