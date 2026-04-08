import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/cn'

/** Padding interior aplicado también por estilo inline para que no lo pisen resets globales (`* { padding: 0 }`, etc.). */
const CARD_INNER_STYLE: CSSProperties = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.75rem',
  padding: 'clamp(1.5rem, 4vw, 2.25rem)',
  width: '100%',
  minWidth: 0,
}

const RADIO_COL_STYLE: CSSProperties = {
  boxSizing: 'border-box',
  display: 'flex',
  width: '2.25rem',
  minWidth: '2.25rem',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'stretch',
}

const TEXT_COL_STYLE: CSSProperties = {
  boxSizing: 'border-box',
  flex: '1 1 0%',
  minWidth: 0,
  padding: 0,
}

export interface RadioCardOption {
  value: string
  title: string
  desc: string
}

export interface RadioCardGroupProps {
  label: string
  labelIcon?: ReactNode
  /** Prefijo estable para ids (leyenda, opciones); el `name` HTML de los radios es distinto para no colisionar con inputs ocultos de RHF. */
  name: string
  options: RadioCardOption[]
  value: string
  onChange: (value: string) => void
  error?: string
  className?: string
}

export function RadioCardGroup({
  label,
  labelIcon,
  name,
  options,
  value,
  onChange,
  error,
  className,
}: RadioCardGroupProps) {
  const legendId = `${name}-legend`
  const radioName = `${name}__rg`

  return (
    <fieldset
      className={cn('m-0 w-full min-w-0 border-0 p-0', className)}
      aria-describedby={error ? `${name}-error` : undefined}
    >
      <legend
        id={legendId}
        className="mb-7 w-full max-w-none p-0 text-left text-base font-semibold tracking-[0.02em] text-[var(--white)]"
      >
        <span className="inline-flex w-full items-center justify-start gap-3">
          {labelIcon ? (
            <span
              className="inline-flex size-5 shrink-0 items-center justify-center text-[var(--gray-300)] [&_svg]:size-[1.125rem]"
              aria-hidden
            >
              {labelIcon}
            </span>
          ) : null}
          <span className="min-w-0 flex-1 leading-snug">{label}</span>
        </span>
      </legend>

      <div
        className="flex w-full min-w-0 flex-col gap-3 sm:gap-4"
        role="radiogroup"
        aria-labelledby={legendId}
      >
        {options.map((opt) => {
          const selected = value === opt.value
          const inputId = `${name}-${opt.value}`
          return (
            <label
              key={opt.value}
              htmlFor={inputId}
              className={cn(
                'block w-full min-w-0 cursor-pointer overflow-hidden rounded-xl border transition-colors duration-200',
                'border-[rgba(244,229,212,0.16)] bg-[rgba(10,3,17,0.4)]',
                'hover:border-[rgba(244,229,212,0.26)] hover:bg-[rgba(10,3,17,0.55)]',
                selected &&
                  'border-[rgba(251,119,60,0.6)] bg-[rgba(251,119,60,0.08)] shadow-[inset_0_0_0_1px_rgba(251,119,60,0.15)]',
              )}
            >
              <span
                className={cn(
                  '!m-0 !min-w-0 !max-w-none',
                  '!flex !flex-row !items-center !justify-start',
                  // Refuerzo Tailwind por si el inline se ignora en algún entorno
                  '!gap-3 !p-6 sm:!gap-3 sm:!p-8',
                )}
                style={CARD_INNER_STYLE}
              >
                <span className="!m-0 flex !items-center !justify-center" style={RADIO_COL_STYLE}>
                  <input
                    id={inputId}
                    type="radio"
                    name={radioName}
                    value={opt.value}
                    checked={selected}
                    onChange={() => onChange(opt.value)}
                    className="!m-0 size-4 shrink-0 cursor-pointer accent-[var(--orange-500)]"
                  />
                </span>

                <span
                  className="!m-0 block min-w-0 flex-1 space-y-3 text-left !px-0 !py-0"
                  style={TEXT_COL_STYLE}
                >
                  <span className="block text-[0.9375rem] font-medium leading-snug text-[var(--white)]">
                    {opt.title}
                  </span>
                  <span className="block text-[0.8125rem] leading-[1.65] text-[var(--gray-300)]">
                    {opt.desc}
                  </span>
                </span>
              </span>
            </label>
          )
        })}
      </div>

      {error ? (
        <p id={`${name}-error`} className="mt-4 text-sm leading-relaxed text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </fieldset>
  )
}
