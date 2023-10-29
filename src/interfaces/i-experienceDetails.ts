import type { StaticImageData } from 'next/image'

export interface IExperienceDetails {
  logo: string | StaticImageData
  logoAlt: string
  position: string
  startDate: Date
  endDate?: Date
  summary: string[]
}
