import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, CSSReset, Box, Button } from '@chakra-ui/react'
import { lightTheme, darkTheme } from './theme/theme'
import { MoonIcon } from '@chakra-ui/icons'
import { SunIcon } from '@chakra-ui/icons'

import App from './App'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

const AppWrapper = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <ChakraProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CSSReset />
      <Box p={4} m="0 auto" maxW="800px" height="100vh">
        <Button
          onClick={toggleTheme}
          type="submit"
          pos="absolute"
          top="3"
          right="3"
          color="text"
          backgroundColor="primary.200"
          _hover={{ backgroundColor: 'primary.100' }}
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </Button>
        <App />
      </Box>
    </ChakraProvider>
  )
}

root.render(<AppWrapper />)
