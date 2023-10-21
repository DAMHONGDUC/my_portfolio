import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

/* this hook not run the callback in first render in useEffect */

export default function useUpdateEffect(
  callback: EffectCallback,
  dependencies: DependencyList,
) {
  const firstRenderRef = useRef(true)

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    return callback()
  }, dependencies)
}
