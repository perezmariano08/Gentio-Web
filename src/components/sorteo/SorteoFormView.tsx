import { useEffect, type ReactNode } from 'react'
import { Controller } from 'react-hook-form'
import { FaInstagram } from 'react-icons/fa'
import { MdConfirmationNumber } from 'react-icons/md'
import { HiBuildingOffice2, HiDevicePhoneMobile, HiPaperAirplane, HiUser } from 'react-icons/hi2'
import type { UseSorteoFormReturn } from '@/hooks/useSorteoForm'
import {
  WebHero,
  WebHeroInner,
  WebPageOuter,
  WebSubtitle,
  WebTitle,
} from '../WebProjects/WebProjectsStyles.js'
import { Button } from '@/components/ui/Button'
import { DatePicker } from '@/components/ui/DatePicker'
import { Input } from '@/components/ui/Input'
import { SorteoCard } from '@/components/ui/SorteoCard'
import { ToggleGroup } from '@/components/ui/ToggleGroup'

const sorteoFormFont = { fontFamily: '"Dunbar Tall", sans-serif' } as const

const pageBottomSpace = 'pb-44 mb-10 md:pb-56 md:mb-16'

function SubmitSpinner() {
  return (
    <svg
      className="h-5 w-5 shrink-0 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

function AlertBanner({
  variant,
  children,
}: {
  variant: 'warn' | 'error'
  children: ReactNode
}) {
  const styles =
    variant === 'warn'
      ? 'border-amber-500/45 bg-amber-500/12 text-amber-100'
      : 'border-red-400/45 bg-red-500/12 text-red-100'

  return (
    <p
      className={`rounded-xl border px-5 py-3.5 text-sm leading-relaxed sm:px-7 ${styles}`}
      role={variant === 'error' ? 'alert' : 'status'}
    >
      {children}
    </p>
  )
}

export function SorteoFormView(props: UseSorteoFormReturn) {
  const {
    sorteos,
    loading,
    submitting,
    submitted,
    error,
    loadError,
    register,
    control,
    watch,
    setValue,
    formState,
    submit,
  } = props

  useEffect(() => {
    if (!submitted) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [submitted])

  if (submitted) {
    return (
      <WebPageOuter>
        <WebHero>
          <WebHeroInner className={pageBottomSpace}>
            <WebTitle style={{ fontWeight: 700 }}>¡Listo!</WebTitle>
            <WebSubtitle>Tu inscripción al sorteo se registró correctamente.</WebSubtitle>
          </WebHeroInner>
        </WebHero>
      </WebPageOuter>
    )
  }

  const tieneEmpresa = watch('tieneEmpresa')

  return (
    <WebPageOuter>
      <WebHero>
        <WebHeroInner className={pageBottomSpace}>
          <WebTitle style={{ fontWeight: 700 }}>Inscripción a sorteos</WebTitle>
          <WebSubtitle>Completá los datos para participar.</WebSubtitle>

          {loadError ? (
            <div className="w-full max-w-xl px-4 sm:px-6">
              <AlertBanner variant="warn">{loadError}</AlertBanner>
            </div>
          ) : null}

          {error ? (
            <div className="w-full max-w-xl px-4 sm:px-6">
              <AlertBanner variant="error">{error}</AlertBanner>
            </div>
          ) : null}

          <div
            className="flex w-full max-w-xl flex-col gap-9 px-4 sm:px-6 [&_input]:font-[inherit] [&_button]:font-[inherit]"
            style={sorteoFormFont}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5">
              <Input
                id="nombre"
                label="Nombre"
                labelIcon={<HiUser />}
                placeholder="Nombre"
                autoComplete="given-name"
                error={formState.errors.nombre?.message}
                {...register('nombre')}
              />
              <Input
                id="apellido"
                label="Apellido"
                placeholder="Apellido"
                autoComplete="family-name"
                error={formState.errors.apellido?.message}
                {...register('apellido')}
              />
            </div>

            <Input
              id="whatsapp"
              label="WhatsApp"
              labelIcon={<HiDevicePhoneMobile />}
              placeholder="+54 9 11 1234 5678"
              inputMode="tel"
              autoComplete="tel"
              error={formState.errors.whatsapp?.message}
              {...register('whatsapp')}
            />

            <Input
              id="instagram"
              label="Instagram"
              labelIcon={<FaInstagram />}
              placeholder="tuusuario (con o sin arroba)"
              autoComplete="username"
              error={formState.errors.instagram?.message}
              hint="Podés incluir o no el arroba."
              {...register('instagram')}
            />

            <DatePicker
              id="fechaNacimiento"
              label="Fecha de nacimiento"
              error={formState.errors.fechaNacimiento?.message}
              {...register('fechaNacimiento')}
            />

            <div className="flex w-full flex-col gap-5 pl-0">
              <div className="flex items-center gap-2.5 text-[0.9rem] font-medium tracking-[0.02em] text-[var(--white)]">
                <span
                  className="inline-flex shrink-0 text-[var(--gray-300)] [&_svg]:h-5 [&_svg]:w-5"
                  aria-hidden
                >
                  <MdConfirmationNumber />
                </span>
                Sorteo
              </div>
              <Controller
                name="sorteo"
                control={control}
                render={({ field }) => (
                  <>
                    <div className="min-w-0 w-full pb-1">
                      <div
                        className="-mx-4 flex snap-x snap-mandatory items-stretch gap-1.5 overflow-x-auto overflow-y-visible scroll-smooth px-4 pb-5 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6"
                        role="list"
                        aria-label="Elegir sorteo"
                      >
                        {sorteos.map((s) => (
                          <SorteoCard
                            key={s.id}
                            nombre={s.nombre}
                            descripcion={s.descripcion}
                            selected={field.value === s.id}
                            onSelect={() => {
                              field.onChange(s.id)
                              void field.onBlur()
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    {loading ? (
                      <p className="text-sm text-[var(--gray-300)]">Cargando sorteos…</p>
                    ) : null}
                    {formState.errors.sorteo?.message ? (
                      <p className="text-sm text-red-400" role="alert">
                        {formState.errors.sorteo.message}
                      </p>
                    ) : null}
                  </>
                )}
              />
            </div>

            <ToggleGroup
              label="¿Tenés empresa, pyme o sos emprendedor?"
              labelIcon={<HiBuildingOffice2 />}
              value={tieneEmpresa}
              onChange={(v) =>
                setValue('tieneEmpresa', v, { shouldValidate: true, shouldTouch: true })
              }
              error={formState.errors.tieneEmpresa?.message}
            />

            <Button
              type="button"
              variant="primary"
              className="w-full sm:w-auto"
              disabled={submitting || loading || !!loadError}
              onClick={submit}
            >
              {submitting ? (
                <>
                  <SubmitSpinner />
                  Enviando…
                </>
              ) : (
                <>
                  <HiPaperAirplane aria-hidden />
                  Enviar inscripción
                </>
              )}
            </Button>
          </div>
        </WebHeroInner>
      </WebHero>
    </WebPageOuter>
  )
}
