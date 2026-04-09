import { useId, useRef, type ChangeEvent, type CSSProperties, type ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/Button'

/** Padding inline: mismo criterio que RadioCardGroup — el reset global no debe pisar el aire interior. */
const DROP_ZONE_STYLE: CSSProperties = {
  boxSizing: 'border-box',
  padding: 'clamp(1.25rem, 3.5vw, 1.75rem)',
  gap: '1rem',
}

export interface FileUploadProps {
  label: string
  labelIcon?: ReactNode
  error?: string
  hint?: ReactNode
  accept: string
  maxSizeMB: number
  onChange: (file: File | null) => void
  value: File | null
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function FileUpload({
  label,
  labelIcon,
  error,
  hint,
  accept,
  maxSizeMB,
  onChange,
  value,
}: FileUploadProps) {
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const maxBytes = maxSizeMB * 1024 * 1024
  const oversize = value !== null && value.size > maxBytes

  const handlePick = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    onChange(f ?? null)
    e.target.value = ''
  }

  const handleClear = () => {
    onChange(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center gap-2.5">
        {labelIcon ? (
          <span
            className="inline-flex shrink-0 text-[var(--gray-300)] [&_svg]:h-5 [&_svg]:w-5"
            aria-hidden
          >
            {labelIcon}
          </span>
        ) : null}
        <label htmlFor={inputId} className="text-base font-semibold tracking-[0.02em] text-[var(--white)]">
          {label}
        </label>
      </div>

      <div
        style={DROP_ZONE_STYLE}
        className={cn(
          'mt-6 flex min-h-13 flex-col rounded-md border border-[rgba(244,229,212,0.28)] bg-[rgba(10,3,17,0.85)] sm:flex-row sm:items-center sm:justify-between sm:gap-6',
          (error || oversize) && 'border-red-500',
        )}
      >
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept={accept}
          className="sr-only"
          aria-invalid={error || oversize ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          onChange={handlePick}
        />
        <div className="min-w-0 flex-1 py-0.5 text-sm sm:py-0">
          {value ? (
            <span className="block truncate text-[var(--white)]" title={value.name}>
              {value.name}
              <span className="ml-2 text-[var(--gray-300)]">({formatBytes(value.size)})</span>
            </span>
          ) : (
            <span className="text-[var(--gray-300)]">Ningún archivo seleccionado</span>
          )}
        </div>
        <div className="flex w-full shrink-0 flex-wrap items-center gap-3 sm:w-auto sm:justify-end">
          <Button type="button" variant="primary" onClick={() => inputRef.current?.click()}>
            Elegir archivo
          </Button>
          {value ? (
            <Button type="button" variant="secondary" onClick={handleClear}>
              Quitar
            </Button>
          ) : null}
        </div>
      </div>

      {(hint && !error) || oversize || error ? (
        <div className="mt-4 flex flex-col gap-2.5 pl-0.5">
          {hint && !error ? <p className="text-xs leading-relaxed text-[var(--gray-300)]">{hint}</p> : null}
          {oversize ? (
            <p className="text-xs text-red-400" role="status">
              El archivo supera {maxSizeMB} MB.
            </p>
          ) : null}
          {error ? (
            <p id={`${inputId}-error`} className="text-xs text-red-400" role="alert">
              {error}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
