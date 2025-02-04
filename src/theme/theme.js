import { extendTheme } from '@chakra-ui/react'

// Настройки светлой темы
const lightTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    primary: {
      50: '#EFECF9',
      100: '#D2C9ED',
      200: '#B6A7E2',
      300: '#9985D6',
      400: '#7C62CB',
      500: '#6040BF',
      600: '#4D3399',
      700: '#392673',
      800: '#26194D',
      900: '#130D26',
    },
    text: '#130D26',
    accent: '#4D3399',
    background: '#fff',
    backgroundSoftOpacity: 'rgba(255, 255, 255, 0.7)',
    backgroundHardOpacity: 'rgba(255, 255, 255, 0.4)',
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
    huge: '64px',
  },
  shadows: {
    ContainerShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  radii: {
    soft: '10px',
    rounded: '20px',
  },
  styles: {
    global: {
      body: {
        backgroundImage: {
          base: 'url(/react-weather-app/public/images/day.jpg)', // JPEG для старых браузеров
          md: 'url(/react-weather-app/public/images/day.webp)', // WebP для поддерживающих браузеров
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      },
      h1: {
        fontSize: 'xl',
        fontWeight: 'bold',
        color: 'primary.900',
      },
      h2: {
        fontSize: 'lg',
        fontWeight: 'bold',
        color: 'primary.600',
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
      50: '#EFECF9',
      100: '#D2C9ED',
      200: '#B6A7E2',
      300: '#9985D6',
      400: '#7C62CB',
      500: '#6040BF',
      600: '#4D3399',
      700: '#392673',
      800: '#26194D',
      900: '#130D26',
    },
    text: '#ffffff',
    accent: '#ffffff',
    background: '#120B23',
    backgroundSoftOpacity: 'rgba(82, 75, 149, 0.7)',
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
    huge: '64px',
  },
  shadows: {
    ContainerShadow: '0px 4px 4px 2px rgb(0 0 0 / 19%);',
  },
  radii: {
    soft: '10px',
    rounded: '20px',
  },
  styles: {
    global: {
      body: {
        backgroundImage: {
          // jpg for old and webp for new browsers
          base: 'url(/react-weather-app/public/images/night.jpg)',
          md: 'url(/react-weather-app/public/images/night.webp)',
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      },
      h1: {
        fontSize: 'xl',
        fontWeight: 'bold',
        color: 'white',
      },
      h2: {
        fontSize: 'lg',
        fontWeight: 'bold',
        color: 'primary.200',
      },
    },
  },
})

export { lightTheme, darkTheme }
