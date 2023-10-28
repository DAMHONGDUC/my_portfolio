import type { StaticImageData } from 'next/image'

export interface ITechDetails {
  logo: string | StaticImageData
  darkModeLogo?: string | StaticImageData
  label: string
  url: string
}
