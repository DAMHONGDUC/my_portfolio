'use client'

import { useState, useEffect } from 'react'
import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from 'antd'
import { CustomButton } from './ThemeSwitcher.style'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  // until the UI is mounted, display a dummy icon
  if (!mounted) {
    return (
      <Button>
        <Sun />
      </Button>
    )
  }

  return (
    <CustomButton type='text' onClick={toggleTheme}>
      {theme === 'dark' ? <Sun /> : <MoonStar />}
    </CustomButton>
  )
}

export default ThemeSwitcher

// Ref :: https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
