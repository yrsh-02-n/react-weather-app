/* eslint-disable react/prop-types */
import { FormControl, Input, Button } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

import { useState } from 'react'
import { weatherRequestFromAPI } from '../utils/weatherRequestFromAPI'

const Form = ({ fetchWeatherData }) => {
  const [requestText, setRequestText] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()

    // Call function from App
    if (!requestText.trim()) return
    fetchWeatherData(requestText)
    weatherRequestFromAPI(requestText)
    setRequestText('')
  }

  return (
    <FormControl
      as="form"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="12px"
      marginBottom="10"
      w="100%"
      onSubmit={onSubmitHandler}
    >
      <Input
        type="text"
        placeholder="Enter your city"
        color="text"
        bgColor="background"
        border="0"
        _focus={{ borderColor: 'accent', boxShadow: 'none', outline: 'none' }}
        value={requestText}
        onChange={(e) => setRequestText(e.target.value)}
      />
      <Button
        type="submit"
        color="text"
        backgroundColor="primary.200"
        _hover={{ backgroundColor: 'primary.100' }}
      >
        <SearchIcon />
      </Button>
    </FormControl>
  )
}

export default Form
