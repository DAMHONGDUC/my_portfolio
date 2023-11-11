import { isMobile } from 'react-device-detect'

const fontSizeWeb = {
  h0: 26,
  h1: 24,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
}

const fontSizeMobile = {
  h0: 24,
  h1: 22,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
}

export const theme = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#F9FAFB',
    grey200: '#e5e7eb',
    red: '#f00',
    white: '#ffffff',
    black: '#000000',
    success: '#02b784',
    text: {
      color0: '#000000',
      color1: '#4b5563',
      color1Hover: '#111827',
      color0Hover: '#171717',
    },
    header: {
      blurColor: '',
      borderColor: '#F3F4F6',
    },
    button: {
      hoverColor: '#c9c7c7',
    },
    card: {
      boxShadow1: '#0000001a',
      boxShadow2: '#0000000f',
    },
  },
  fontSize: isMobile ? fontSizeMobile : fontSizeWeb,
}
