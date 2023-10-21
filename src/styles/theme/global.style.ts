import { createGlobalStyle } from 'styled-components'
// import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  [class*=' ant-input'] {
    box-shadow: none !important;
  }
  .ant-input-affix-wrapper {
    &:focus {
      box-shadow: none !important;
    }
  }


  .ant-input,
  .ant-form-item-control-input-content {
    &:focus {
      box-shadow: none !important;
    }
    .ant-input-affix-wrapper-focused {
      box-shadow: none !important;
    }
  }
`
