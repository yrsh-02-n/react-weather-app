import { useState } from 'react'

export const useTemperatureUnit = () => {
  const [isCelsius, setIsCelsius] = useState(true)

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius)
  }

  return { isCelsius, toggleTemperatureUnit }
}
