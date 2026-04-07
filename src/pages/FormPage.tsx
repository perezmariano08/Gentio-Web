import { SorteoFormView } from '@/components/sorteo/SorteoFormView'
import { useSorteoForm } from '@/hooks/useSorteoForm'

export default function FormPage() {
  return <SorteoFormView {...useSorteoForm()} />
}
