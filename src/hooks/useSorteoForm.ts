import { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export interface SorteoItem {
  id: string
  nombre: string
  descripcion: string
}

/** Cuerpo JSON del POST; el script de la hoja debe leer estas claves (incl. `Apellido` si ya lo tenés así). */
export interface SorteoInscripcionPayload {
  nombre: string
  apellido: string
  /** Mismo valor que `apellido`; algunos `doPost` de Sheets esperan la mayúscula. */
  Apellido: string
  whatsapp: string
  instagram: string
  fechaNacimiento: string
  /** Nombre visible del sorteo (ej. "Voucher Luco Gourmet"), no el id interno. */
  sorteo: string
  /** Id/slug del sorteo (ej. sorteo-0) por si el script lo necesita. */
  sorteoId: string
  tieneEmpresa: boolean
}

function isAdult(isoDate: string): boolean {
  if (!isoDate) return false
  const born = new Date(`${isoDate}T12:00:00`)
  if (Number.isNaN(born.getTime())) return false
  const limit = new Date()
  limit.setFullYear(limit.getFullYear() - 18)
  return born <= limit
}

export const sorteoFormSchema = z.object({
  nombre: z.string().trim().min(1, 'Requerido'),
  apellido: z.string().trim().min(1, 'Requerido'),
  whatsapp: z
    .string()
    .min(1, 'Requerido')
    .regex(/^[+0-9]+$/, 'Solo números y +')
    .refine((v) => (v.match(/\d/g) ?? []).length >= 10, 'Mínimo 10 dígitos'),
  instagram: z.string().trim().min(1, 'Requerido'),
  fechaNacimiento: z
    .string()
    .min(1, 'Requerido')
    .refine((d) => isAdult(d), 'Debés ser mayor de 18 años'),
  sorteo: z.string().min(1, 'Elegí un sorteo'),
  tieneEmpresa: z
    .union([z.literal(''), z.literal('si'), z.literal('no')])
    .refine((v) => v === 'si' || v === 'no', 'Elegí SI o NO')
    .transform((v): 'si' | 'no' => v),
})

export type SorteoFormInputValues = z.input<typeof sorteoFormSchema>
export type SorteoFormOutputValues = z.output<typeof sorteoFormSchema>

function parseSorteos(data: unknown): SorteoItem[] {
  const normalizeOne = (item: unknown, index: number): SorteoItem | null => {
    if (!item || typeof item !== 'object') return null
    const r = item as Record<string, unknown>
    const id = String(r.id ?? r.slug ?? `sorteo-${index}`)
    const nombre = String(r.nombre ?? r.name ?? r.titulo ?? 'Sorteo')
    const descripcion = String(r.descripcion ?? r.description ?? '')
    return { id, nombre, descripcion }
  }

  if (Array.isArray(data)) {
    return data.map(normalizeOne).filter((x): x is SorteoItem => x !== null)
  }
  if (data && typeof data === 'object') {
    const o = data as Record<string, unknown>
    if (Array.isArray(o.sorteos)) {
      return o.sorteos.map(normalizeOne).filter((x): x is SorteoItem => x !== null)
    }
    if (Array.isArray(o.data)) {
      return o.data.map(normalizeOne).filter((x): x is SorteoItem => x !== null)
    }
  }
  return []
}

export interface UseSorteoFormReturn {
  sorteos: SorteoItem[]
  loading: boolean
  submitting: boolean
  submitted: boolean
  error: string | null
  loadError: string | null
  register: ReturnType<typeof useForm<SorteoFormInputValues>>['register']
  control: ReturnType<typeof useForm<SorteoFormInputValues>>['control']
  watch: ReturnType<typeof useForm<SorteoFormInputValues>>['watch']
  setValue: ReturnType<typeof useForm<SorteoFormInputValues>>['setValue']
  formState: ReturnType<typeof useForm<SorteoFormInputValues>>['formState']
  submit: () => void
}

export function useSorteoForm(): UseSorteoFormReturn {
  const [sorteos, setSorteos] = useState<SorteoItem[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)

  const endpoint = import.meta.env.VITE_APPS_SCRIPT_URL?.trim() ?? ''

  const defaultValues = useMemo<SorteoFormInputValues>(
    () => ({
      nombre: '',
      apellido: '',
      whatsapp: '',
      instagram: '',
      fechaNacimiento: '',
      sorteo: '',
      tieneEmpresa: '',
    }),
    [],
  )

  const form = useForm<SorteoFormInputValues>({
    resolver: zodResolver(sorteoFormSchema),
    defaultValues,
    mode: 'onTouched',
  })

  const { register, control, handleSubmit, watch, setValue, formState } = form

  useEffect(() => {
    let cancelled = false

    if (!endpoint) {
      setLoadError('Falta configurar VITE_APPS_SCRIPT_URL o URL_FORM en el entorno.')
      setLoading(false)
      return
    }

    setLoading(true)
    setLoadError(null)

    void fetch(endpoint, { method: 'GET' })
      .then(async (res) => {
        if (!res.ok) throw new Error('fetch')
        return res.json() as unknown
      })
      .then((json) => {
        if (cancelled) return
        const list = parseSorteos(json)
        setSorteos(list)
        if (list.length === 0) {
          setLoadError('No hay sorteos disponibles por ahora.')
        }
      })
      .catch(() => {
        if (!cancelled) {
          setLoadError('No se pudieron cargar los sorteos.')
          setSorteos([])
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [endpoint])

  const onValid = useCallback(
    async (data: SorteoFormInputValues) => {
      if (!endpoint) {
        setError('Falta configurar el endpoint.')
        return
      }

      setError(null)
      setSubmitting(true)

      const apellido = data.apellido.trim()
      const sorteoNombre =
        sorteos.find((s) => s.id === data.sorteo)?.nombre?.trim() || data.sorteo

      const payload: SorteoInscripcionPayload = {
        nombre: data.nombre.trim(),
        apellido,
        Apellido: apellido,
        whatsapp: data.whatsapp,
        instagram: data.instagram.replace(/^@+/, ''),
        fechaNacimiento: data.fechaNacimiento,
        sorteo: sorteoNombre,
        sorteoId: data.sorteo,
        tieneEmpresa: data.tieneEmpresa === 'si',
      }

      try {
        /**
         * Web App de Apps Script: con `no-cors` la respuesta es *opaque*.
         * `application/json` no es un Content-Type "simple" en CORS; en algunos navegadores
         * el POST opaco puede no enviar el cuerpo como esperás y faltan campos (ej. apellido).
         * `text/plain;charset=UTF-8` es simple: el JSON sigue siendo texto crudo y
         * `JSON.parse(e.postData.contents)` en doPost funciona igual.
         */
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
    [endpoint, sorteos],
  )

  const submit = useCallback(() => {
    void handleSubmit(onValid)()
  }, [handleSubmit, onValid])

  return {
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
  }
}
