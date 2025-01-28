import { extendTheme } from '@chakra-ui/react'

// Настройки светлой темы
const lightTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    primary: {
      50: '#e5f8ff',
      100: '#b3e0ff',
      200: '#80c8ff',
      300: '#4db0ff',
      400: '#1a98ff',
      500: '#0077e6',
      600: '#0062b3',
      700: '#004d80',
      800: '#00354d',
      900: '#001c1a',
    },
    background: '#ffffff',
    text: '#000000',
    accent: '#ff7f50',
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  fontSizes: {
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
  },
  styles: {
    global: {
      body: {
        bg: 'background',
        color: 'text',
      },
      h1: {
        fontSize: 'xl',
        fontWeight: 'bold',
      },
    },
  },
})

// Настройки темной темы
const darkTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    primary: {
      50: '#99c2ff',
      100: '#6699ff',
      200: '#3366ff',
      300: '#0042e6',
      400: '#0036b3',
      500: '#002a80',
      600: '#001f66',
      700: '#00134d',
      800: '#000933',
      900: '#00001a',
    },
    background: '#121212',
    text: '#f0f0f0',
    accent: '#ff6347',
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  fontSizes: {
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
  },
  styles: {
    global: {
      body: {
        bg: 'background',
        color: 'text',
      },
      h1: {
        fontSize: 'xl',
        fontWeight: 'bold',
      },
    },
  },
})

export { lightTheme, darkTheme }
