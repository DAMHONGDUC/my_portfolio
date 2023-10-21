import { useEffect, useState } from 'react'

export function useBrowserWidth() {
  const [width, setWidth] = useState<number>(window.innerWidth)
  function onWindowResize() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', onWindowResize)
    return () => {
      window.removeEventListener('resize', onWindowResize)
    }
  }, [])

  return width
}
