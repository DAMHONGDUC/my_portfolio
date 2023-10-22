import * as React from 'react'
import { SectionCustom, MainContainer } from './SectionContainer.style'

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const SectionContainer = React.forwardRef<HTMLElement, ContainerProps>(
  ({ children, style = {}, ...props }: ContainerProps, ref) => {
    return (
      <SectionCustom style={style} ref={ref} {...props}>
        <MainContainer>{children}</MainContainer>
      </SectionCustom>
    )
  },
)

SectionContainer.displayName = 'SectionContainer'

export default SectionContainer
