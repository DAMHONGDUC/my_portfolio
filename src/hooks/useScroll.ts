import { useEffect, useState } from 'react'

interface IEventProps {
  target: any
}

export default function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = ({ target }: IEventProps) => {
    setScrolled(target.scrollTop > threshold)
  }

  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll)
    return () => document.body.removeEventListener('scroll', handleScroll)
  }, [])

  return scrolled
}
