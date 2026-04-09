import { EquipoFormView } from '@/components/EquipoForm/EquipoFormView'
import { useEquipoForm } from '@/hooks/useEquipoForm'

export default function EquipoPage() {
  return <EquipoFormView {...useEquipoForm()} />
}
