import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface SorteoCardProps {
  nombre: string
  descripcion: string
  selected: boolean
  onSelect: () => void
  className?: string
  footer?: ReactNode
}

export function SorteoCard({
  nombre,
  descripcion,
  selected,
  onSelect,
  className,
  footer,
}: SorteoCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'flex min-h-[4.5rem] w-[9rem] shrink-0 flex-col items-center justify-center gap-0.5 rounded-lg border-2 border-dotted px-1.5 py-2 text-center shadow-sm transition',
        'snap-start sm:w-[9.25rem]',
        selected
          ? 'border-[var(--orange-500)] bg-[rgba(251,119,60,0.14)] ring-2 ring-[rgba(251,119,60,0.35)]'
          : 'border-[rgba(244,229,212,0.42)] bg-[rgba(20,6,34,0.55)] hover:border-[rgba(251,119,60,0.55)]',
        className,
      )}
    >
      <span className="line-clamp-2 text-center text-xs font-semibold leading-snug tracking-wide text-[var(--white)]">
        {nombre}
      </span>
      <span className="line-clamp-2 text-center text-[0.6875rem] leading-relaxed text-[var(--gray-300)]">
        {descripcion}
      </span>
      {footer}
    </button>
  )
}
