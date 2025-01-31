import { Box, useColorModeValue } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { weatherRequestFromAPI } from './utils/weatherRequestFromAPI'
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

  // Weather state
  const [weatherData, setWeatherData] = useState(null)
  const [cityName, setCityName] = useState('')

  // Function for updating weather data
  const [isLoading, setIsLoading] = useState(false)

  const fetchWeatherData = (city) => {
    setIsLoading(true)

    // Data loading without manual delay
      // setIsLoading(true)
      // weatherRequestFromAPI(city)
      //   .then((data) => {
      //     setWeatherData(data)
      //     setCityName(city)
      //   })
      //   .catch((error) => console.log(error))
      //   .finally(() => setIsLoading(false))
    

    // Data loading with manual delay (to show loader)
    new Promise((resolve) => setTimeout(resolve, 1000))
      .then(() => weatherRequestFromAPI(city))
      .then((data) => {
        setWeatherData(data)
        setCityName(data.location.name)
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      marginTop={['55', '20', '20']}
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
      <Form fetchWeatherData={fetchWeatherData} />
      <Box textAlign="center" marginBottom="10">
        <h1>{cityName || 'React Weather App'}</h1>
        <h2>{currentDate}</h2>
      </Box>
      <WeatherDataDisplay weatherData={weatherData} isLoading={isLoading} />
      <WeatherForcast weatherData={weatherData} />
    </Box>
  )
}

export default App
