import { Box, useColorModeValue } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { formatDate } from './utils/formatDate'
import Form from './components/form'
import WeatherDataDisplay from './components/weatherDataDisplay'
import WeatherForcast from './components/WeatherForcast'

function App() {
  // Theme
  const bgColor = useColorModeValue('primary.100', 'primary.800')
  const textColor = useColorModeValue('primary.900', 'text')

  // Date
  const [currentDate, setCurrentDate] = useState('')
  useEffect(() => {
    setCurrentDate(formatDate())
  }, [])

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      marginTop={['55', '20', '10']}
      padding={['5', '10', '10']}
      minH="600"
      color={textColor}
      bg={bgColor}
      backgroundColor="backgroundSoftOpacity"
      boxShadow="ContainerShadow"
      backdropFilter="auto"
      backdropBlur="6px"
      borderRadius="rounded"
    >
      <Form />
      <Box textAlign="center" marginBottom="10">
        <h1>City Name</h1>
        <h2>{currentDate}</h2>
      </Box>
      <WeatherDataDisplay />
      <WeatherForcast />
    </Box>
  )
}

export default App
