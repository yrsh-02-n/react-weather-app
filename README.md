# React Weather App
This is my educational project built with React.

# Main Goals
- Practice using Axios with an external API.
- Explore a different UI library (previously used MUI).
- Improve state management skills by learning to pass data via props before moving on to Context API or other state management solutions.

# Features
- Users can enter a city name to get the current weather and a 6-day forecast.
- Displays not only temperature but also wind speed and humidity.
- Users can switch between Celsius and Fahrenheit.
- Supports both light and dark themes.
- Shows error messages in the main block if something goes wrong.

# Tech Stack & Libraries
- React.js
- Axios
- Chakra UI
- [Weather API](https://www.weatherapi.com/)

# Design
The app's design is based on the Chakra UI library. My goal was to follow its documentation to style the app properly.
For the background, I found images with both day and night lighting, which inspired me to integrate them into the design. Unfortunately, I couldn't find the author's name, but I appreciate their work.
Originally, I planned to dynamically change the background based on the time of day. However, since I wanted to explore theme switching in Chakra UI, I decided to link the images to the light and dark themes instead.

Additionally, I used the original weather condition icons from the Weather API but customized their styling to match my design.

If you want to use my customized icons, you can find them in this [Figma file](https://www.figma.com/design/iHSZrH4VShWu718NKVVSvE/Weather-API-code-and-icon-matching?node-id=0-1&t=EsR5U0nKYNpRyg6I-1), sorted by API condition codes.

# Demo
The app is available [here](https://yrsh-02-n.github.io/react-weather-app)