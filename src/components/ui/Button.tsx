import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'toggle'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  /** Solo aplica con variant="toggle": estado activo. */
  active?: boolean
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', active, className, children, disabled, type = 'button', ...rest }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0'

    const variants: Record<ButtonVariant, string> = {
      primary:
        'min-h-[3rem] rounded-full px-8 py-3.5 text-[0.95rem] tracking-[0.03em] bg-[var(--orange-500)] text-[var(--bg)] hover:brightness-95 focus-visible:outline-[var(--orange-500)] [&_svg]:h-5 [&_svg]:w-5',
      secondary:
        'min-h-[2.75rem] rounded-full border border-[rgba(244,229,212,0.2)] bg-transparent px-6 py-2.5 text-[0.85rem] tracking-[0.03em] text-[var(--gray-300)] hover:border-[color:rgba(251,119,60,0.55)] hover:text-[var(--white)] focus-visible:outline-[var(--orange-500)] [&_svg]:h-4 [&_svg]:w-4',
      toggle: active
        ? 'h-12 w-12 min-h-0 min-w-0 shrink-0 rounded-full border border-[var(--orange-500)] bg-[rgba(251,119,60,0.18)] p-0 text-sm font-semibold tracking-wide text-[var(--white)] focus-visible:outline-[var(--orange-500)]'
        : 'h-12 w-12 min-h-0 min-w-0 shrink-0 rounded-full border border-[rgba(244,229,212,0.2)] bg-transparent p-0 text-sm font-semibold tracking-wide text-[var(--gray-300)] hover:border-[color:rgba(251,119,60,0.55)] hover:text-[var(--white)] focus-visible:outline-[var(--gray-300)]',
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(base, variants[variant], className)}
        aria-pressed={variant === 'toggle' ? active : undefined}
        {...rest}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
