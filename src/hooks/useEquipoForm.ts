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

const CV_MIME = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
])

function isAllowedCvFile(file: File): boolean {
  if (CV_MIME.has(file.type)) return true
  return /\.(pdf|doc|docx)$/i.test(file.name)
}

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const r = reader.result
      if (typeof r !== 'string') {
        reject(new Error('read'))
        return
      }
      const i = r.indexOf('base64,')
      resolve(i >= 0 ? r.slice(i + 7) : r)
    }
    reader.onerror = () => reject(reader.error ?? new Error('read'))
    reader.readAsDataURL(file)
  })
}

export type JornadaEquipo = 'part_time' | 'full_time' | 'freelance'
export type PuestoEquipo =
  | 'audiovisual'
  | 'diseno'
  | 'redes'
  | 'copywriter'
  | 'contenido'
  | 'pm'
  | 'dev'
  | 'ia'

export interface EquipoPostulacionPayload {
  nombre: string
  apellido: string
  email: string
  whatsapp: string
  fechaNacimiento: string
  perfilSocial: string
  jornada: string
  puesto: string
  cvBase64: string
  cvNombre: string
}

export const equipoFormSchema = z.object({
  nombre: z.string().trim().min(2, 'Mínimo 2 caracteres'),
  apellido: z.string().trim().min(2, 'Mínimo 2 caracteres'),
  email: z.string().trim().min(1, 'Requerido').email('Email inválido'),
  whatsapp: z
    .string()
    .min(1, 'Requerido')
    .regex(/^[+0-9\s]+$/, 'Solo números, espacios y +')
    .refine((v) => (v.match(/\d/g) ?? []).length >= 10, 'Mínimo 10 dígitos'),
  fechaNacimiento: z
    .string()
    .min(1, 'Requerido')
    .refine((d) => isAdult(d), 'Debés ser mayor de 18 años'),
  perfilSocial: z.string().trim().min(3, 'Mínimo 3 caracteres'),
  jornada: z
    .union([z.literal(''), z.literal('part_time'), z.literal('full_time'), z.literal('freelance')])
    .refine((v) => v !== '', 'Elegí una opción')
    .transform((v): JornadaEquipo => v as JornadaEquipo),
  puesto: z
    .union([
      z.literal(''),
      z.literal('audiovisual'),
      z.literal('diseno'),
      z.literal('redes'),
      z.literal('copywriter'),
      z.literal('contenido'),
      z.literal('pm'),
      z.literal('dev'),
      z.literal('ia'),
    ])
    .refine((v) => v !== '', 'Elegí una opción')
    .transform((v): PuestoEquipo => v as PuestoEquipo),
  cv: z
    .union([z.instanceof(File), z.null()])
    .refine((f): f is File => f instanceof File, { message: 'Requerido' })
    .refine((f) => f.size <= 10 * 1024 * 1024, { message: 'Máximo 10 MB' })
    .refine((f) => isAllowedCvFile(f), { message: 'Solo PDF, DOC o DOCX' }),
})

export type EquipoFormInputValues = z.input<typeof equipoFormSchema>
export type EquipoFormOutputValues = z.output<typeof equipoFormSchema>

export interface UseEquipoFormReturn {
  submitting: boolean
  submitted: boolean
  error: string | null
  register: ReturnType<typeof useForm<EquipoFormInputValues>>['register']
  control: ReturnType<typeof useForm<EquipoFormInputValues>>['control']
  watch: ReturnType<typeof useForm<EquipoFormInputValues>>['watch']
  setValue: ReturnType<typeof useForm<EquipoFormInputValues>>['setValue']
  formState: ReturnType<typeof useForm<EquipoFormInputValues>>['formState']
  submit: () => void
}

export function useEquipoForm(): UseEquipoFormReturn {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const endpoint = import.meta.env.VITE_APPS_SCRIPT_URL_EQUIPO?.trim() ?? ''

  const defaultValues = useMemo<EquipoFormInputValues>(
    () => ({
      nombre: '',
      apellido: '',
      email: '',
      whatsapp: '',
      fechaNacimiento: '',
      perfilSocial: '',
      jornada: '',
      puesto: '',
      cv: null,
    }),
    [],
  )

  const form = useForm<EquipoFormInputValues>({
    resolver: zodResolver(equipoFormSchema),
    defaultValues,
    mode: 'onTouched',
  })

  const { register, control, handleSubmit, watch, setValue, formState } = form

  const onValid = useCallback(async (data: EquipoFormInputValues) => {
    const v = equipoFormSchema.parse(data)

    if (!endpoint) {
      setError('Falta configurar VITE_APPS_SCRIPT_URL_EQUIPO o URL_FORM_EQUIPO en el entorno.')
      return
    }

    setError(null)
    setSubmitting(true)

    let cvBase64: string
    try {
      cvBase64 = await readFileAsBase64(v.cv)
    } catch {
      setError('No se pudo leer el archivo. Intentá con otro CV.')
      setSubmitting(false)
      return
    }

    const jornadaLabel: Record<JornadaEquipo, string> = {
      part_time: 'Part Time',
      full_time: 'Full Time',
      freelance: 'Freelance (por proyectos)',
    }

    const puestoLabel: Record<PuestoEquipo, string> = {
      audiovisual: 'Equipo Audiovisual (Filmmaker, fotografía, edición de videos)',
      diseno: 'Diseño gráfico',
      redes: 'Redes sociales (community manager o social media manager)',
      copywriter: 'Copywriter',
      contenido: 'Creador/a de contenido',
      pm: 'Project manager',
      dev: 'Desarrollo web',
      ia: 'Inteligencia artificial (Ingeniería o similares)',
    }

    /** TODO (opcional): carpeta de Drive destino para CVs — configurar en Apps Script si aplica. */
    const payload: EquipoPostulacionPayload = {
      nombre: v.nombre.trim(),
      apellido: v.apellido.trim(),
      email: v.email.trim(),
      whatsapp: v.whatsapp.trim(),
      fechaNacimiento: v.fechaNacimiento,
      perfilSocial: v.perfilSocial.trim(),
      jornada: jornadaLabel[v.jornada],
      puesto: puestoLabel[v.puesto],
      cvBase64,
      cvNombre: v.cv.name,
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
  }, [endpoint])

  const submit = useCallback(() => {
    void handleSubmit(onValid)()
  }, [handleSubmit, onValid])

  return {
    submitting,
    submitted,
    error,
    register,
    control,
    watch,
    setValue,
    formState,
    submit,
  }
}
