import { forwardRef } from 'react'
import type { ReactNode, SelectHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

const selectPadStyle = {
  paddingLeft: '12px',
  paddingRight: '36px',
  paddingTop: '8px',
  paddingBottom: '8px',
} as const

export interface SelectFieldOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string
  label: string
  error?: string
  hint?: ReactNode
  labelIcon?: ReactNode
  options: SelectFieldOption[]
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ id, label, error, hint, labelIcon, options, className, style, ...rest }, ref) => {
    return (
      <div className="flex w-full flex-col gap-2.5">
        <div className="flex items-center gap-2">
          {labelIcon ? (
            <span
              className="inline-flex shrink-0 text-[var(--gray-300)] [&_svg]:h-4 [&_svg]:w-4"
              aria-hidden
            >
              {labelIcon}
            </span>
          ) : null}
          <label htmlFor={id} className="text-sm font-medium text-[var(--white)]">
            {label}
          </label>
        </div>
        <div className="relative w-full max-w-full">
          <select
            ref={ref}
            id={id}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
            style={{ ...selectPadStyle, ...style }}
            className={cn(
              'box-border h-10 w-full max-w-full cursor-pointer appearance-none rounded-md border border-[rgba(244,229,212,0.28)] bg-[rgba(10,3,17,0.85)] text-sm leading-normal text-[var(--white)]',
              'focus:border-[var(--orange-500)] focus:outline-none focus:ring-1 focus:ring-[var(--orange-500)]',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500/50',
              className,
            )}
            {...rest}
          >
            {options.map((o) => (
              <option key={o.value || 'empty'} value={o.value} disabled={o.disabled}>
                {o.label}
              </option>
            ))}
          </select>
          <span
            className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--gray-300)]"
            aria-hidden
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
        {hint && !error ? <p className="text-xs text-[var(--gray-300)]">{hint}</p> : null}
        {error ? (
          <p id={`${id}-error`} className="text-xs text-red-400" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    )
  },
)

SelectField.displayName = 'SelectField'
