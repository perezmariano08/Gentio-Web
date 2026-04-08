import type { ReactNode } from 'react'
import { Button } from './Button'
import { cn } from '@/lib/cn'

export type ToggleEmpresaValue = '' | 'si' | 'no'

export interface ToggleGroupProps {
  label: string
  value: ToggleEmpresaValue
  onChange: (value: 'si' | 'no') => void
  error?: string
  className?: string
  labelIcon?: ReactNode
  /** Id único para accesibilidad si hay más de un ToggleGroup en la misma página. */
  groupLabelId?: string
  /** Contenido del botón SÍ (ej. icono + texto). */
  siLabel?: ReactNode
  /** Contenido del botón NO. */
  noLabel?: ReactNode
}

export function ToggleGroup({
  label,
  value,
  onChange,
  error,
  className,
  labelIcon,
  groupLabelId = 'toggle-tiene-empresa',
  siLabel = 'SÍ',
  noLabel = 'NO',
}: ToggleGroupProps) {
  const groupId = groupLabelId

  return (
    <fieldset
      className={cn(
        'm-0 mb-14 flex flex-col gap-4 border-0 p-0 sm:mb-16',
        className,
      )}
    >
      <legend className="mb-0 flex items-center gap-2.5 text-base font-semibold tracking-[0.02em] text-[var(--white)]">
        {labelIcon ? (
          <span
            className="inline-flex shrink-0 text-[var(--gray-300)] [&_svg]:h-5 [&_svg]:w-5"
            aria-hidden
          >
            {labelIcon}
          </span>
        ) : null}
        {label}
      </legend>
      <div className="flex flex-wrap gap-3 pt-6" role="group" aria-labelledby={groupId}>
        <span id={groupId} className="sr-only">
          {label}
        </span>
        <Button type="button" variant="toggle" active={value === 'si'} onClick={() => onChange('si')}>
          {siLabel}
        </Button>
        <Button type="button" variant="toggle" active={value === 'no'} onClick={() => onChange('no')}>
          {noLabel}
        </Button>
      </div>
      {error ? (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </fieldset>
  )
}
