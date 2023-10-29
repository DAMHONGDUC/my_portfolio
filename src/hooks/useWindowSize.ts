import { useState, useEffect } from 'react'

interface ISize {
  windowWidth: number
  windowHeight: number
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<ISize>({
    windowWidth: 0,
    windowHeight: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}
