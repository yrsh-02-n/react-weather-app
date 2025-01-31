/* eslint-disable react/prop-types */
import { Box, Image, Text, Spinner } from '@chakra-ui/react'

const WeatherDataDisplay = ({ weatherData, isLoading }) => {
  return (
    <Box
      display="flex"
      justifyContent={['center', 'space-between', 'space-between']}
      alignItems="center"
      flexWrap="wrap"
      gap="20px"
      minH="169px"
      padding={['5', '5', '5']}
      textAlign="center"
      color="text"
      backgroundColor="backgroundHardOpacity"
      w="100%"
      border="3px solid"
      borderColor="primary.200"
      borderRadius="rounded"
    >
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          margin="0 auto"
        >
          <Spinner color="primary.200" />
        </Box>
      ) : weatherData ? (
        <>
          <Box display="flex" textAlign={['center', 'left']} gap="10px">
            <Box>
              <Box display="flex" alignItems="flex-start" gap="10px">
                <Box display="flex">
                  <Text fontSize="huge" fontWeight="Bold" lineHeight="1.35">
                    {weatherData.current.temp_c}
                  </Text>
                  <Text fontSize="xl">°C</Text>
                </Box>
                <Image
                  src={`/icons/${weatherData.current.condition.code}.svg`}
                  alt="weather"
                  w="60px"
                />
              </Box>
              <Text fontSize="lg" color="accent">
                {weatherData.current.condition.text}
              </Text>
            </Box>
          </Box>
          <Box display="flex" gap="20px" alignItems="center">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Image src="/icons/Wind.svg" alt="weather" w="60px" />
              <Text fontSize="lg" fontWeight="Bold">
                {weatherData.current.wind_kph} 0 m/s
              </Text>
              <Text fontSize="lg">Wind speed</Text>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Image src="/icons/Humidity.svg" alt="weather" w="60px" />
              <Text fontSize="lg" fontWeight="Bold">
                {weatherData.current.humidity}%
              </Text>
              <Text fontSize="lg">Humidity</Text>
            </Box>
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          margin="0 auto"
        >
          <h2>Enter your city to receive data</h2>
        </Box>
      )}
    </Box>
  )
}

export default WeatherDataDisplay
