/* eslint-disable react/prop-types */
import { Box, Text, Image } from '@chakra-ui/react'
import { formatDateWeekDay } from '../utils/formatDate'

const WeatherForcast = ({ forecastData, isCelsius }) => {
  if (!forecastData) return null

  // Get days without today
  const forecastDays = forecastData.forecast.forecastday.slice(1)

  return (
    <Box
      display="flex"
      flexDirection={['column', 'column', 'row']}
      justify-content="space-between"
      width="100%"
      gap="10px"
      marginTop="5"
    >
      {forecastDays.map((day) => (
        <Box
          key={day.date}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="5px"
          padding="3"
          w="100%"
          backgroundColor="backgroundHardOpacity"
          borderRadius="rounded"
          border="3px solid"
          borderColor="primary.200"
        >
          <Text fontWeight="bold" color="text">
            {formatDateWeekDay(day.date)}
          </Text>
          <Image
            src={`icons/${day.day.condition.code}.svg`}
            alt="weather"
            w="40px"
          />
          <Box display="flex">
            <Text color="text" textAlign="center">
              {isCelsius
                ? `${day.day.avgtemp_c} °C`
                : `${day.day.avgtemp_f} °F`}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default WeatherForcast
