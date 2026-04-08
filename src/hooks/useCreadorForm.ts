import { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

function isAdult(isoDate: string): boolean {
  if (!isoDate) return false
  const born = new Date(`${isoDate}T12:00:00`)
  if (Number.isNaN(born.getTime())) return false
  const limit = new Date()
  limit.setFullYear(limit.getFullYear() - 18)
  return born <= limit
}

function parseNonNegativeInt(raw: string): number | null {
  const s = String(raw).trim().replace(/\s/g, '')
  if (s === '') return null
  const n = Number(s)
  if (Number.isNaN(n) || !Number.isFinite(n)) return null
  if (n < 0) return null
  return Math.floor(n)
}

export interface CreadorUgcPayload {
  nombre: string
  apellido: string
  whatsapp: string
  fechaNacimiento: string
  tieneIG: 'si' | 'no'
  igUsuario: string
  igSeguidores: number
  tieneTT: 'si' | 'no'
  ttUsuario: string
  ttSeguidores: number
  tipoCreador: 'ugc' | 'influencer' | 'ambos'
  tipoColaboracion: 'canje' | 'paga' | 'ambos'
  monotributo: 'si' | 'no' | 'gestionando'
}

export const creadorFormSchema = z
  .object({
    nombre: z.string().trim().min(2, 'Mínimo 2 caracteres'),
    apellido: z.string().trim().min(2, 'Mínimo 2 caracteres'),
    whatsapp: z
      .string()
      .min(1, 'Requerido')
      .regex(/^[+0-9\s]+$/, 'Solo números, espacios y +')
      .refine((v) => (v.match(/\d/g) ?? []).length >= 10, 'Mínimo 10 dígitos'),
    fechaNacimiento: z
      .string()
      .min(1, 'Requerido')
      .refine((d) => isAdult(d), 'Debés ser mayor de 18 años'),
    tieneIG: z
      .union([z.literal(''), z.literal('si'), z.literal('no')])
      .refine((v) => v === 'si' || v === 'no', 'Elegí SI o NO')
      .transform((v): 'si' | 'no' => v),
    igUsuario: z.string(),
    igSeguidores: z.string(),
    tieneTT: z
      .union([z.literal(''), z.literal('si'), z.literal('no')])
      .refine((v) => v === 'si' || v === 'no', 'Elegí SI o NO')
      .transform((v): 'si' | 'no' => v),
    ttUsuario: z.string(),
    ttSeguidores: z.string(),
    tipoCreador: z
      .union([z.literal(''), z.literal('ugc'), z.literal('influencer'), z.literal('ambos')])
      .refine((v) => v !== '', 'Elegí una opción')
      .transform((v): 'ugc' | 'influencer' | 'ambos' => v as 'ugc' | 'influencer' | 'ambos'),
    tipoColaboracion: z
      .union([z.literal(''), z.literal('canje'), z.literal('paga'), z.literal('ambos')])
      .refine((v) => v !== '', 'Elegí una opción')
      .transform((v): 'canje' | 'paga' | 'ambos' => v as 'canje' | 'paga' | 'ambos'),
    monotributo: z
      .union([z.literal(''), z.literal('si'), z.literal('no'), z.literal('gestionando')])
      .refine((v) => v !== '', 'Seleccioná una opción')
      .transform((v): 'si' | 'no' | 'gestionando' => v as 'si' | 'no' | 'gestionando'),
  })
  .superRefine((data, ctx) => {
    if (data.tieneIG === 'si') {
      if (!data.igUsuario.trim()) {
        ctx.addIssue({ code: 'custom', message: 'Requerido', path: ['igUsuario'] })
      }
      const parsed = parseNonNegativeInt(data.igSeguidores)
      if (data.igSeguidores.trim() === '') {
        ctx.addIssue({ code: 'custom', message: 'Requerido', path: ['igSeguidores'] })
      } else if (parsed === null) {
        ctx.addIssue({ code: 'custom', message: 'Número válido, mínimo 0', path: ['igSeguidores'] })
      }
    }
    if (data.tieneTT === 'si') {
      if (!data.ttUsuario.trim()) {
        ctx.addIssue({ code: 'custom', message: 'Requerido', path: ['ttUsuario'] })
      }
      const parsed = parseNonNegativeInt(data.ttSeguidores)
      if (data.ttSeguidores.trim() === '') {
        ctx.addIssue({ code: 'custom', message: 'Requerido', path: ['ttSeguidores'] })
      } else if (parsed === null) {
        ctx.addIssue({ code: 'custom', message: 'Número válido, mínimo 0', path: ['ttSeguidores'] })
      }
    }
  })

export type CreadorFormInputValues = z.input<typeof creadorFormSchema>
export type CreadorFormOutputValues = z.output<typeof creadorFormSchema>

export interface UseCreadorFormReturn {
  submitting: boolean
  submitted: boolean
  error: string | null
  register: ReturnType<typeof useForm<CreadorFormInputValues>>['register']
  watch: ReturnType<typeof useForm<CreadorFormInputValues>>['watch']
  setValue: ReturnType<typeof useForm<CreadorFormInputValues>>['setValue']
  formState: ReturnType<typeof useForm<CreadorFormInputValues>>['formState']
  submit: () => void
}

export function useCreadorForm(): UseCreadorFormReturn {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const endpoint = import.meta.env.VITE_APPS_SCRIPT_URL_UGC?.trim() ?? ''

  const defaultValues = useMemo<CreadorFormInputValues>(
    () => ({
      nombre: '',
      apellido: '',
      whatsapp: '',
      fechaNacimiento: '',
      tieneIG: '',
      igUsuario: '',
      igSeguidores: '',
      tieneTT: '',
      ttUsuario: '',
      ttSeguidores: '',
      tipoCreador: '',
      tipoColaboracion: '',
      monotributo: '',
    }),
    [],
  )

  const form = useForm<CreadorFormInputValues>({
    resolver: zodResolver(creadorFormSchema),
    defaultValues,
    mode: 'onTouched',
  })

  const { register, handleSubmit, watch, setValue, formState } = form

  const onValid = useCallback(
    async (data: CreadorFormInputValues) => {
      /** El resolver ya aplicó Zod en runtime; el tipo de RHF sigue siendo el input. */
      const v = creadorFormSchema.parse(data)
      if (!endpoint) {
        setError('Falta configurar VITE_APPS_SCRIPT_URL_UGC o URL_FORM_UGC en el entorno.')
        return
      }

      setError(null)
      setSubmitting(true)

      const igSeg = v.tieneIG === 'si' ? (parseNonNegativeInt(v.igSeguidores) ?? 0) : 0
      const ttSeg = v.tieneTT === 'si' ? (parseNonNegativeInt(v.ttSeguidores) ?? 0) : 0

      const payload: CreadorUgcPayload = {
        nombre: v.nombre.trim(),
        apellido: v.apellido.trim(),
        whatsapp: v.whatsapp.trim(),
        fechaNacimiento: v.fechaNacimiento,
        tieneIG: v.tieneIG,
        igUsuario: v.tieneIG === 'si' ? v.igUsuario.trim().replace(/^@+/, '') : '',
        igSeguidores: igSeg,
        tieneTT: v.tieneTT,
        ttUsuario: v.tieneTT === 'si' ? v.ttUsuario.trim().replace(/^@+/, '') : '',
        ttSeguidores: ttSeg,
        tipoCreador: v.tipoCreador,
        tipoColaboracion: v.tipoColaboracion,
        monotributo: v.monotributo,
      }

      try {
        await fetch(endpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
          body: JSON.stringify(payload),
        })
        setSubmitted(true)
      } catch {
        setError('Error de red. Intentá de nuevo.')
      } finally {
        setSubmitting(false)
      }
    },
    [endpoint],
  )

  const submit = useCallback(() => {
    void handleSubmit(onValid)()
  }, [handleSubmit, onValid])

  return {
    submitting,
    submitted,
    error,
    register,
    watch,
    setValue,
    formState,
    submit,
  }
}
