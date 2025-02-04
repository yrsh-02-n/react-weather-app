/* eslint-disable react/prop-types */
import { Box, Image, Text, Spinner, Switch } from '@chakra-ui/react'

const WeatherDataDisplay = ({
  weatherData,
  isLoading,
  isCelsius,
  toggleTemperatureUnit,
  error,
}) => {
  return (
    <Box
      display="flex"
      justifyContent={['center', 'space-between', 'space-between']}
      alignItems="center"
      flexWrap="wrap"
      gap="20px"
      minH="169px"
      padding={['5', '5', '5']}
      marginTop={['20px', '0', '0']}
      textAlign="center"
      color="text"
      backgroundColor="backgroundHardOpacity"
      w="100%"
      border="3px solid"
      borderColor="primary.200"
      borderRadius="rounded"
      position="relative"
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
      ) : error ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          margin="0 auto"
        >
          <Text color="red.500" fontSize="lg" fontWeight="bold">
            {error}
          </Text>
        </Box>
      ) : weatherData ? (
        <>
          <Box
            display="flex"
            alignItems="center"
            position="absolute"
            top="-40px"
            right={['auto', '20px', '20px']}
          >
            °C
            <Switch
              onChange={toggleTemperatureUnit}
              isChecked={!isCelsius}
              margin="0 10px"
              sx={{
                'span.chakra-switch__track[data-checked]': {
                  bg: 'primary.200',
                },
                'span.chakra-switch__track': {
                  bg: 'primary.200',
                },
              }}
            />
            °F
          </Box>

          <Box display="flex" textAlign={['center', 'left']} gap="10px">
            <Box>
              <Box display="flex" alignItems="flex-start" gap="10px">
                <Box display="flex">
                  <Text fontSize="huge" fontWeight="Bold" lineHeight="1.35">
                    {isCelsius
                      ? weatherData?.current?.temp_c
                      : weatherData?.current?.temp_f}
                  </Text>
                  <Text fontSize="xl">{isCelsius ? '°C' : '°F'}</Text>
                </Box>
                <Image
                  src={`icons/${weatherData.current.condition.code}.svg`}
                  alt="weather"
                  w="60px"
                />
              </Box>
              <Text fontSize="lg" color="accent">
                {weatherData?.current?.condition.text}
              </Text>
            </Box>
          </Box>

          <Box display="flex" gap="20px" alignItems="center">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Image src="icons/Wind.svg" alt="weather" w="60px" />
              <Text fontSize="lg" fontWeight="Bold">
                {weatherData?.current?.wind_kph} 0 m/s
              </Text>
              <Text fontSize="lg">Wind speed</Text>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Image src="icons/Humidity.svg" alt="weather" w="60px" />
              <Text fontSize="lg" fontWeight="Bold">
                {weatherData?.current?.humidity}%
              </Text>
              <Text fontSize="lg">Humidity</Text>
            </Box>
          </Box>
        </>
      ) : (
        // At the start of the app
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
