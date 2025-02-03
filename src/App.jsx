import { Box, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
// Utils
import {
  weatherCurrentFromAPI,
  weatherForecastFromAPI,
} from './utils/weatherRequestFromAPI'
import { formatDate } from './utils/formatDate'
// Components
import Form from './components/form'
import WeatherDataDisplay from './components/weatherDataDisplay'
import WeatherForcast from './components/WeatherForcast'

function App() {
  // Theme
  const bgColor = useColorModeValue('primary.100', 'primary.800')
  const textColor = useColorModeValue('primary.900', 'text')

  // Date
  const [currentDate] = useState(formatDate())

  // Weather state
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [cityName, setCityName] = useState('')

  // Function for updating weather data
  const [isLoading, setIsLoading] = useState(false)
  const fetchWeatherData = (city) => {
    setIsLoading(true)

    Promise.all([weatherCurrentFromAPI(city), weatherForecastFromAPI(city)])
      .then(([currentData, forecastData]) => {
        setWeatherData(currentData)
        setForecastData(forecastData)
        setCityName(currentData.location.name)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }

  // Switch Celsius to Fahrenheit
  const [isCelsius, setIsCelsius] = useState(true)
  const toggleTemperatureUnit = () => setIsCelsius(!isCelsius)

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      marginTop={['55', '20', '20']}
      padding={['5', '10', '10']}
      minH="580"
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
      <WeatherDataDisplay
        weatherData={weatherData}
        isLoading={isLoading}
        isCelsius={isCelsius}
        toggleTemperatureUnit={toggleTemperatureUnit}
      />
      <WeatherForcast forecastData={forecastData} isCelsius={isCelsius} />
    </Box>
  )
}

export default App
