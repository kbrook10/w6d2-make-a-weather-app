//Create Global Variables
var temp;
var tempTitle;

//Create fetch function to retrieve the Weather API data
//Weather API key - 2aa850c37ec30570872da9e9a3dce373
fetchWeather()
function fetchWeather(e){
    fetch('http://api.openweathermap.org/data/2.5/weather?id=4861716&appid=2aa850c37ec30570872da9e9a3dce373')
        .then(response => response.json())
        .then(weatherData)
}

//Create function to reuse the API data
function weatherData(weather) {
    console.log(weather)

    //Update the name of the city in the DOM
    document.getElementById('city').innerHTML = weather.name;
    var temp = Math.round(1.8 * ((weather.main.temp) - 273) + 32);

    //Update the temperature in the DOM
    document.getElementById('temp').innerHTML = temp
    console.log(Math.round(1.8 * ((weather.main.temp) - 273) + 32))

    //Update the temperature description in the DOM
    var tempTitle = weather.weather[0].description
    console.log(weather.weather[0].description)
    document.getElementById('tempTitle').innerHTML = tempTitle

    //Update the date information
    var date = moment().format('MMMM Do YYYY [at] h:mm a');
    document.getElementById('date').innerHTML = date
    console.log(date)
}
//Update the title of the city
