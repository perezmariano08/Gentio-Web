import { CreadorFormView } from '@/components/CreadorForm/CreadorFormView'
import { useCreadorForm } from '@/hooks/useCreadorForm'

export default function CreadoresPage() {
  return <CreadorFormView {...useCreadorForm()} />
}
