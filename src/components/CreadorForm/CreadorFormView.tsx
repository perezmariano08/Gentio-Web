import { useEffect, type ReactNode } from 'react'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import { HiDevicePhoneMobile, HiPaperAirplane, HiUser } from 'react-icons/hi2'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { MdHandshake, MdOutlineAccountBalanceWallet } from 'react-icons/md'
import type { CreadorFormInputValues, UseCreadorFormReturn } from '@/hooks/useCreadorForm'
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
import { RadioCardGroup } from '@/components/ui/RadioCardGroup'
import { SelectField } from '@/components/ui/SelectField'
import { ToggleGroup } from '@/components/ui/ToggleGroup'
import { cn } from '@/lib/cn'

const formFont = { fontFamily: '"Dunbar Tall", sans-serif' } as const

const pageBottomSpace = 'pb-44 mb-10 md:pb-56 md:mb-16'

const tipoCreadorOptions = [
  {
    value: 'ugc',
    title: 'Creador UGC',
    desc: 'Generás el contenido pero lo publicamos nosotros. No necesitás audiencia, necesitás talento frente a cámara.',
  },
  {
    value: 'influencer',
    title: 'Influencer',
    desc: 'El contenido se publica en tu perfil. La marca aprovecha tu comunidad.',
  },
  {
    value: 'ambos',
    title: 'Los dos',
    desc: 'Podés hacer ambos tipos de acciones según lo que proponga cada marca.',
  },
] as const

const tipoColaboracionOptions = [
  {
    value: 'canje',
    title: 'Canje',
    desc: 'Recibís producto o servicio a cambio del contenido.',
  },
  {
    value: 'paga',
    title: 'Paga',
    desc: 'Colaboraciones con retribución económica.',
  },
  {
    value: 'ambos',
    title: 'Ambas',
    desc: 'Abierto a cualquier tipo de propuesta.',
  },
] as const

const WHATSAPP_CREADORES_URL =
  'https://chat.whatsapp.com/IwIIC0eEOOq7V1RlriMwVU?mode=gi_t'

const monotributoOptions = [
  { value: '', label: 'Seleccioná una opción', disabled: true },
  { value: 'si', label: 'Sí, tengo monotributo' },
  { value: 'no', label: 'No tengo' },
  { value: 'gestionando', label: 'Lo estoy gestionando' },
]

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

function CollapseFields({ open, children }: { open: boolean; children: ReactNode }) {
  return (
    <div
      className={cn(
        'grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none',
        open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
      )}
    >
      <div className="min-h-0 overflow-hidden">{children}</div>
    </div>
  )
}

export function CreadorFormView(props: UseCreadorFormReturn) {
  const { submitting, submitted, error, register, watch, setValue, formState, submit } = props

  const tieneIG = watch('tieneIG')
  const tieneTT = watch('tieneTT')
  const tipoCreador = watch('tipoCreador')
  const tipoColaboracion = watch('tipoColaboracion')

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
              Recibimos tu información. Te vamos a contactar cuando tengamos una acción que encaje con tu
              perfil.
            </WebSubtitle>
            <p
              className="m-0 max-w-[560px] text-base leading-relaxed text-[var(--gray-300)]"
              style={formFont}
            >
              Gracias por sumarte a nuestro equipo de creadores. Unite al grupo de WhatsApp de Creadores de
              Gentío:
            </p>
            <a
              href={WHATSAPP_CREADORES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex min-h-[3rem] max-w-[560px] items-center justify-center rounded-full',
                'bg-[var(--orange-500)] px-8 py-3.5 text-[0.95rem] font-medium tracking-[0.03em]',
                'text-[var(--bg)] transition hover:brightness-95',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-500)]',
              )}
              style={formFont}
            >
              Unirme acá
            </a>
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
            Sumate a la comunidad de{' '}
            <span className="text-(--orange-500)">creadores de contenido</span> de Gentío
          </WebTitle>
          <WebSubtitle>
            Completá tus datos y te contactamos cuando tengamos una acción que encaje con tu perfil.
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
            <input type="hidden" {...register('tipoCreador')} />
            <input type="hidden" {...register('tipoColaboracion')} />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5">
              <Input
                id="creador-nombre"
                label="Nombre"
                labelIcon={<HiUser />}
                placeholder="Nombre"
                autoComplete="given-name"
                error={formState.errors.nombre?.message}
                {...register('nombre')}
              />
              <Input
                id="creador-apellido"
                label="Apellido"
                placeholder="Apellido"
                autoComplete="family-name"
                error={formState.errors.apellido?.message}
                {...register('apellido')}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5">
              <Input
                id="creador-whatsapp"
                label="WhatsApp"
                labelIcon={<HiDevicePhoneMobile />}
                placeholder="+54 9 11 1234 5678"
                inputMode="tel"
                autoComplete="tel"
                error={formState.errors.whatsapp?.message}
                {...register('whatsapp')}
              />
              <DatePicker
                id="creador-fechaNacimiento"
                label="Fecha de nacimiento"
                error={formState.errors.fechaNacimiento?.message}
                {...register('fechaNacimiento')}
              />
            </div>

            <ToggleGroup
              groupLabelId="toggle-creador-ig"
              label="¿Tenés Instagram?"
              labelIcon={<FaInstagram />}
              value={tieneIG}
              onChange={(v) =>
                setValue('tieneIG', v, { shouldValidate: true, shouldTouch: true })
              }
              error={formState.errors.tieneIG?.message}
            />

            <CollapseFields open={tieneIG === 'si'}>
              <div className="grid grid-cols-1 gap-6 pb-2 sm:grid-cols-2 sm:gap-5">
                <Input
                  id="creador-ig-usuario"
                  label="IG Usuario"
                  labelIcon={<FaInstagram />}
                  placeholder="@tuusuario"
                  autoComplete="username"
                  error={formState.errors.igUsuario?.message}
                  {...register('igUsuario')}
                />
                <Input
                  id="creador-ig-seguidores"
                  label="IG Seguidores"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  step={1}
                  placeholder="Ej. 12000"
                  error={formState.errors.igSeguidores?.message}
                  {...register('igSeguidores')}
                />
              </div>
            </CollapseFields>

            <ToggleGroup
              groupLabelId="toggle-creador-tt"
              label="¿Tenés TikTok?"
              labelIcon={<FaTiktok />}
              value={tieneTT}
              onChange={(v) =>
                setValue('tieneTT', v, { shouldValidate: true, shouldTouch: true })
              }
              error={formState.errors.tieneTT?.message}
            />

            <CollapseFields open={tieneTT === 'si'}>
              <div className="grid grid-cols-1 gap-6 pb-2 sm:grid-cols-2 sm:gap-5">
                <Input
                  id="creador-tt-usuario"
                  label="TT Usuario"
                  labelIcon={<FaTiktok />}
                  placeholder="@tuusuario"
                  autoComplete="username"
                  error={formState.errors.ttUsuario?.message}
                  {...register('ttUsuario')}
                />
                <Input
                  id="creador-tt-seguidores"
                  label="TT Seguidores"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  step={1}
                  placeholder="Ej. 5000"
                  error={formState.errors.ttSeguidores?.message}
                  {...register('ttSeguidores')}
                />
              </div>
            </CollapseFields>

            <RadioCardGroup
              name="tipoCreador"
              label="Tipo de creador"
              labelIcon={<IoPersonCircleOutline />}
              options={[...tipoCreadorOptions]}
              value={tipoCreador}
              onChange={(v) =>
                setValue('tipoCreador', v as Exclude<CreadorFormInputValues['tipoCreador'], ''>, {
                  shouldValidate: true,
                  shouldTouch: true,
                })
              }
              error={formState.errors.tipoCreador?.message}
            />

            <RadioCardGroup
              name="tipoColaboracion"
              label="Tipo de colaboración"
              labelIcon={<MdHandshake />}
              options={[...tipoColaboracionOptions]}
              value={tipoColaboracion}
              onChange={(v) =>
                setValue(
                  'tipoColaboracion',
                  v as Exclude<CreadorFormInputValues['tipoColaboracion'], ''>,
                  { shouldValidate: true, shouldTouch: true },
                )
              }
              error={formState.errors.tipoColaboracion?.message}
            />

            <SelectField
              id="creador-monotributo"
              label="Monotributo"
              labelIcon={<MdOutlineAccountBalanceWallet />}
              options={monotributoOptions}
              error={formState.errors.monotributo?.message}
              hint="Esta info nos ayuda a coordinar el tipo de colaboración que podemos ofrecerte."
              {...register('monotributo')}
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
                  Enviar mi información
                </>
              )}
            </Button>
          </div>
        </WebHeroInner>
      </WebHero>
    </WebPageOuter>
  )
}
