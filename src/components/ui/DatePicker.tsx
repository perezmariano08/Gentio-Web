import { forwardRef, useRef } from 'react'
import { IoCalendarOutline } from 'react-icons/io5'
import type { InputProps } from './Input'
import { cn } from '@/lib/cn'
import { mergeRefs } from '@/lib/mergeRefs'

export type DatePickerProps = Omit<InputProps, 'type'>

const datePadStyle = {
  paddingLeft: '12px',
  paddingRight: '40px',
  paddingTop: '8px',
  paddingBottom: '8px',
} as const

const dateInputClass =
  'box-border h-10 w-full min-w-0 max-w-full rounded-md border border-[rgba(244,229,212,0.28)] bg-[rgba(10,3,17,0.85)] text-sm leading-normal text-[var(--white)] ' +
  'focus:border-[var(--orange-500)] focus:outline-none focus:ring-1 focus:ring-[var(--orange-500)] ' +
  '[color-scheme:dark] ' +
  '[&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-y-0 [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:z-[1] [&::-webkit-calendar-picker-indicator]:w-12 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0'

function tryShowPicker(el: HTMLInputElement | null) {
  if (!el) return
  try {
    el.showPicker()
  } catch {
    /* noop */
  }
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ id, label, error, hint, labelIcon, className, style, onClick, ...rest }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    return (
      <div className="flex min-w-0 w-full flex-col gap-2.5">
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
        <div className="relative min-w-0 w-full overflow-x-hidden">
          <input
            ref={mergeRefs(ref, inputRef)}
            id={id}
            type="date"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
            style={{ ...datePadStyle, ...style }}
            className={cn(
              dateInputClass,
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500/50',
              className,
            )}
            onClick={(e) => {
              onClick?.(e)
              tryShowPicker(e.currentTarget)
            }}
            {...rest}
          />
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-1.5 top-1/2 z-[2] -translate-y-1/2 cursor-pointer border-0 bg-transparent p-1 text-[var(--gray-300)] hover:text-[var(--white)]"
            aria-label="Abrir calendario"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              const el = inputRef.current
              el?.focus()
              tryShowPicker(el)
            }}
          >
            <IoCalendarOutline className="pointer-events-none h-4 w-4 opacity-90" aria-hidden />
          </button>
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

DatePicker.displayName = 'DatePicker'
