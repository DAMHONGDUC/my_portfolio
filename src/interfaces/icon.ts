import React from 'react'

export type IconModel = {
  color?: string
  size: number[] // mang kich thuoc x,y (width, height)
  viewBox: number[] // mang kich thuoc x,y (width, height)
  textColor?: string
  style?: React.CSSProperties
  options?: {
    color: string
    backgroundColor: string
  }
  onClick?: () => void
  children?: React.ReactNode
}
