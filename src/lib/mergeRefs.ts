import type { MutableRefObject, Ref, RefCallback } from 'react'

/** Une varias refs (p. ej. forwardRef + react-hook-form `register`). */
export function mergeRefs<T>(...refs: Array<Ref<T> | undefined | null>): RefCallback<T> {
  return (node) => {
    for (const ref of refs) {
      if (ref == null) continue
      if (typeof ref === 'function') {
        ;(ref as RefCallback<T>)(node)
      } else {
        ;(ref as MutableRefObject<T | null>).current = node
      }
    }
  }
}
