import { StaticImageData } from 'next/image'

export interface IProjectDetails {
  name: string
  description: string
  url: string
  previewImage: string | StaticImageData
  technologies: string[]
  demo: string
  source: string
}
