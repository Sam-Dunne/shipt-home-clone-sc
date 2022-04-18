# Goals of this project

- Clone responsive design of [Shipt's homepage](https://www.shipt.com/) 
    with Styled Components
- Utilize the babel plugin for prefixing human readable SC generated classnames
- Make Single Source of truth for responsive breakpoints
- Improve vanilla css skills \(goodbye bootstrap\)
- Use as many of SC's niceities to better understand use cases for element props, GlobalStyle, ThemeProvider, etc
 

## Status/Todo
- NavbarMenu in mobile transition bug. hamburger animation and flex rules still off
- Make fixed positioned 'feedback' element 
- Consider ink rethink for main section wrapper for more global control of view padding


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `api response object from https://weatherdbi.herokuapp.com/data/weather/atlanta`
{
"region": "Atlanta, GA",
"currentConditions": {
"dayhour": "Monday 7:00 PM",
"temp": {
"c": 16,
"f": 61
},
"precip": "0%",
"humidity": "53%",
"wind": {
"km": 26,
"mile": 16
},
"iconURL": "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
"comment": "Partly cloudy"
},
"next_days": [
{
"day": "Monday",
"comment": "Clear with periodic clouds",
"max_temp": {
"c": 22,
"f": 72
},
"min_temp": {
"c": 6,
"f": 42
},
"iconURL": "https://ssl.gstatic.com/onebox/weather/48/sunny_s_cloudy.png"
},
{
"day": "Tuesday",
"comment": "Sunny",
"max_temp": {
"c": 18,
"f": 64
},
"min_temp": {
"c": 6,
"f": 42
},
"iconURL": "https://ssl.gstatic.com/onebox/weather/48/sunny.png"
},
{
"day": "Wednesday",
"comment": "Partly cloudy",
"max_temp": {
"c": 22,
"f": 72
},
"min_temp": {
"c": 12,
"f": 54
},
"iconURL": "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
},
{
"day": "Thursday",
"comment": "Partly cloudy",
"max_temp": {
"c": 25,
"f": 77
},
"min_temp": {
"c": 13,
"f": 55
},
"iconURL": "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
},
{
"day": "Friday",
"comment": "Sunny",
"max_temp": {
"c": 27,
"f": 81
},
"min_temp": {
"c": 14,
"f": 57
},
"iconURL": "https://ssl.gstatic.com/onebox/weather/48/sunny.png"
},
{
"day": "Saturday",
"comment": "Mostly sunny",
"max_temp": {
"c": 28,
"f": 82
},
"min_temp": {
"c": 16,
"f": 60
},
"iconURL": "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
},
{
"day": "Sunday",
"comment": "Partly cloudy",
"max_temp": {
"c": 28,
"f": 83
},
"min_temp": {
"c": 16,
"f": 61
},
"iconURL": "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
},
{
"day": "Monday",
"comment": "Mostly sunny",
"max_temp": {
"c": 29,
"f": 85
},
"min_temp": {
"c": 17,
"f": 62
},
"iconURL": "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
}
],
"contact_author": {
"email": "communication.with.users@gmail.com",
"auth_note": "Mail me for feature requests, improvement, bug, help, ect... Please tell me if you want me to provide any other free easy-to-use API services"
},
"data_source": "https://www.google.com/search?lr=lang_en&q=weather+in+atlanta"
}

