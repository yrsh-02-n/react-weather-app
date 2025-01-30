import { Box, Image, Text } from '@chakra-ui/react'

const WeatherDataDisplay = () => {
  return (
    <Box
      display="flex"
      justifyContent={['center', 'space-between', 'space-between']}
      alignItems="flex-end"
      flexWrap="wrap"
      gap="20px"
      padding={['5', '5', '5']}
      textAlign="center"
      color="text"
      backgroundColor="backgroundHardOpacity"
      w="100%"
      border="3px solid"
      borderColor="primary.200"
      borderRadius="rounded"
    >
      <Box display="flex" textAlign={['center', 'left']} gap="10px">
        <Box>
          <Box display="flex" alignItems="flex-start" gap="10px">
            <Box display="flex">
              <Text fontSize="huge" fontWeight="Bold">
                20
              </Text>
              <Text fontSize="xl">°C</Text>
            </Box>
            <Image src="/icons/Sunny.svg" alt="weather" w="60px" />
          </Box>
          <Text fontSize="lg" color="accent">
            Weather text status
          </Text>
        </Box>
      </Box>

      <Box display="flex" gap="20px" alignItems="center">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src="/icons/Wind.svg" alt="weather" w="60px" />
          <Text fontSize="lg" fontWeight="Bold">
            0 m/s
          </Text>
          <Text fontSize="lg">Wind speed</Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src="/icons/Humidity.svg" alt="weather" w="60px" />
          <Text fontSize="lg" fontWeight="Bold">
            100%
          </Text>
          <Text fontSize="lg">Humidity</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default WeatherDataDisplay
