import { forwardRef } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

/** Padding fijo (inline) para que no lo pise el reset global `* { padding: 0 }`. */
const inputPadStyle = {
  paddingLeft: '12px',
  paddingRight: '12px',
  paddingTop: '8px',
  paddingBottom: '8px',
} as const

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  error?: string
  hint?: ReactNode
  labelIcon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, hint, labelIcon, className, style, ...rest }, ref) => {
    return (
      <div className="flex w-full flex-col gap-1.5">
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
        <input
          ref={ref}
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          style={{ ...inputPadStyle, ...style }}
          className={cn(
            'box-border h-10 w-full max-w-full rounded-md border border-[rgba(244,229,212,0.28)] bg-[rgba(10,3,17,0.85)] text-sm leading-normal text-[var(--white)]',
            'placeholder:text-[var(--gray-300)] placeholder:opacity-80',
            'focus:border-[var(--orange-500)] focus:outline-none focus:ring-1 focus:ring-[var(--orange-500)]',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/50',
            className,
          )}
          {...rest}
        />
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

Input.displayName = 'Input'
