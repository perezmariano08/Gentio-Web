import { useEffect, type ReactNode } from 'react'
import { Controller } from 'react-hook-form'
import { FaLinkedin } from 'react-icons/fa'
import {
  HiBriefcase,
  HiClock,
  HiDevicePhoneMobile,
  HiDocumentArrowUp,
  HiEnvelope,
  HiPaperAirplane,
  HiUser,
} from 'react-icons/hi2'
import type { EquipoFormInputValues, UseEquipoFormReturn } from '@/hooks/useEquipoForm'
import {
  WebHero,
  WebHeroInner,
  WebPageOuter,
  WebSubtitle,
  WebTitle,
} from '../WebProjects/WebProjectsStyles.js'
import { Button } from '@/components/ui/Button'
import { DatePicker } from '@/components/ui/DatePicker'
import { FileUpload } from '@/components/ui/FileUpload'
import { Input } from '@/components/ui/Input'
import { RadioCardGroup } from '@/components/ui/RadioCardGroup'

const formFont = { fontFamily: '"Dunbar Tall", sans-serif' } as const

const pageBottomSpace = 'pb-44 mb-10 md:pb-56 md:mb-16'

const jornadaOptions = [
  {
    value: 'part_time',
    title: 'Part Time',
    desc: 'Disponibilidad parcial',
  },
  {
    value: 'full_time',
    title: 'Full Time',
    desc: 'Dedicación completa',
  },
  {
    value: 'freelance',
    title: 'Freelance (por proyectos)',
    desc: 'Por proyecto según disponibilidad',
  },
] as const

const puestoOptions = [
  {
    value: 'audiovisual',
    title: 'Equipo Audiovisual',
    desc: 'Filmmaker, fotografía, edición de videos',
  },
  { value: 'diseno', title: 'Diseño gráfico', desc: '' },
  {
    value: 'redes',
    title: 'Redes sociales',
    desc: 'Community manager o social media manager',
  },
  { value: 'copywriter', title: 'Copywriter', desc: '' },
  { value: 'contenido', title: 'Creador/a de contenido', desc: '' },
  { value: 'pm', title: 'Project manager', desc: '' },
  { value: 'dev', title: 'Desarrollo web', desc: '' },
  {
    value: 'ia',
    title: 'Inteligencia artificial',
    desc: 'Ingeniería o similares',
  },
] as const

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

export function EquipoFormView(props: UseEquipoFormReturn) {
  const { submitting, submitted, error, register, control, watch, setValue, formState, submit } = props

  const jornada = watch('jornada')
  const puesto = watch('puesto')

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
            <WebSubtitle>
              Recibimos tu postulación. Si tu perfil encaja con lo que buscamos, te vamos a contactar.
            </WebSubtitle>
          </WebHeroInner>
        </WebHero>
      </WebPageOuter>
    )
  }

  return (
    <WebPageOuter>
      <WebHero>
        <WebHeroInner className={pageBottomSpace}>
          <WebTitle style={{ fontWeight: 700 }}>
            <span className="text-(--orange-500)">Sumate</span> al equipo de Gentío
          </WebTitle>
          <WebSubtitle>
            Nuestra agencia crece mes a mes. Si te interesa formar parte, completá el formulario.
          </WebSubtitle>

          {error ? (
            <div className="w-full max-w-xl px-4 sm:px-6">
              <AlertBanner variant="error">{error}</AlertBanner>
            </div>
          ) : null}

          <div
            className="flex w-full max-w-xl flex-col gap-9 [&_input]:font-[inherit] [&_button]:font-[inherit] [&_select]:font-[inherit]"
            style={formFont}
          >
            <input type="hidden" {...register('jornada')} />
            <input type="hidden" {...register('puesto')} />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5">
              <Input
                id="equipo-nombre"
                label="Nombre"
                labelIcon={<HiUser />}
                placeholder="Nombre"
                autoComplete="given-name"
                error={formState.errors.nombre?.message}
                {...register('nombre')}
              />
              <Input
                id="equipo-apellido"
                label="Apellido"
                placeholder="Apellido"
                autoComplete="family-name"
                error={formState.errors.apellido?.message}
                {...register('apellido')}
              />
            </div>

            <Input
              id="equipo-email"
              label="Email"
              labelIcon={<HiEnvelope />}
              placeholder="tu@email.com"
              type="email"
              autoComplete="email"
              error={formState.errors.email?.message}
              {...register('email')}
            />

            <Input
              id="equipo-whatsapp"
              label="WhatsApp"
              labelIcon={<HiDevicePhoneMobile />}
              placeholder="+54 9 11 1234 5678"
              inputMode="tel"
              autoComplete="tel"
              error={formState.errors.whatsapp?.message}
              {...register('whatsapp')}
            />

            <DatePicker
              id="equipo-fechaNacimiento"
              label="Fecha de nacimiento"
              error={formState.errors.fechaNacimiento?.message}
              {...register('fechaNacimiento')}
            />

            <Input
              id="equipo-perfilSocial"
              label="Perfil de LinkedIn o Instagram"
              labelIcon={<FaLinkedin />}
              placeholder="URL o @usuario"
              error={formState.errors.perfilSocial?.message}
              {...register('perfilSocial')}
            />

            <RadioCardGroup
              name="jornadaEquipo"
              label="Preferencia de jornada"
              labelIcon={<HiClock />}
              options={[...jornadaOptions]}
              value={jornada}
              onChange={(v) =>
                setValue('jornada', v as Exclude<EquipoFormInputValues['jornada'], ''>, {
                  shouldValidate: true,
                  shouldTouch: true,
                })
              }
              error={formState.errors.jornada?.message}
            />

            <RadioCardGroup
              name="puestoEquipo"
              label="Puesto al que te postulás"
              labelIcon={<HiBriefcase />}
              options={[...puestoOptions]}
              value={puesto}
              onChange={(v) =>
                setValue('puesto', v as Exclude<EquipoFormInputValues['puesto'], ''>, {
                  shouldValidate: true,
                  shouldTouch: true,
                })
              }
              error={formState.errors.puesto?.message}
            />

            <Controller
              name="cv"
              control={control}
              render={({ field }) => (
                <FileUpload
                  label="CV"
                  labelIcon={<HiDocumentArrowUp />}
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  maxSizeMB={10}
                  value={field.value}
                  onChange={(f) => {
                    field.onChange(f)
                    void field.onBlur()
                  }}
                  error={formState.errors.cv?.message}
                  hint="PDF, Word (.doc, .docx), hasta 10 MB."
                />
              )}
            />

            <Button
              type="button"
              variant="primary"
              className="w-full sm:w-auto"
              disabled={submitting}
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
                  Enviar postulación
                </>
              )}
            </Button>
          </div>
        </WebHeroInner>
      </WebHero>
    </WebPageOuter>
  )
}
