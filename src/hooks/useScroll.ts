import { useEffect, useState } from 'react'

export default function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = (event: Event) => {
    setScrolled((event?.target as HTMLElement).scrollTop > threshold)
  }

  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll)
    return () => document.body.removeEventListener('scroll', handleScroll)
  }, [])

  return scrolled
}
