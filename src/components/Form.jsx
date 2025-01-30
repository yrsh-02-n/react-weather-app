import { FormControl, Input, Button } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Form = () => {
  return (
    <FormControl
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="12px"
      marginBottom="10"
      w="100%"
    >
      <Input
        type="text"
        placeholder="Enter your city"
        color="text"
        bgColor="background"
        border="0"
        _focus={{ borderColor: 'accent', boxShadow: 'none', outline: 'none' }}
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
