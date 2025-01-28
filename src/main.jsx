import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, CSSReset, Box, Button } from '@chakra-ui/react'
import { lightTheme, darkTheme } from './theme/theme'
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
      <Box p={4}>
        <Button onClick={toggleTheme}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </Button>
        <App />
      </Box>
    </ChakraProvider>
  )
}

root.render(<AppWrapper />)
