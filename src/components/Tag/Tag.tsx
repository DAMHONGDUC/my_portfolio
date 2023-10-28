import { FC } from 'react'
import { CustomText, TagContainer } from './Tag.styled'

interface IProps {
  title: string
}

const Tag: FC<IProps> = ({ title }) => {
  return (
    <TagContainer>
      <CustomText>{title}</CustomText>
    </TagContainer>
  )
}

export default Tag
