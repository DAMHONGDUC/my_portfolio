import { FC } from 'react'
import { CustomText, TagContainer } from './Tag.styled'
import { TagType } from '@/constants'

interface IProps {
  title: string
  type?: number
}

const Tag: FC<IProps> = ({ title, type = TagType.HEADING }) => {
  if (type === TagType.CONTENT) {
    return <CustomText>{title}</CustomText>
  }

  return (
    <TagContainer>
      <CustomText>{title}</CustomText>
    </TagContainer>
  )
}

export default Tag
