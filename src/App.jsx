import { Box, Text, useColorModeValue } from '@chakra-ui/react'

function App() {
  const bgColor = useColorModeValue('gray.100', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')

  return (
    <Box
      bg={bgColor}
      color={textColor}
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="2xl">React Weather App</Text>
    </Box>
  )
}

export default App
