/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	//Create Global Variables
	var temp;
	var tempTitle;

	//Create fetch function to retrieve the Weather API data
	//Weather API key - 2aa850c37ec30570872da9e9a3dce373
	fetchWeather();
	function fetchWeather(e) {
	    fetch('http://api.openweathermap.org/data/2.5/weather?id=4861716&appid=2aa850c37ec30570872da9e9a3dce373').then(function (response) {
	        return response.json();
	    }).then(weatherData);
	}

	//Create function to reuse the API data
	function weatherData(weather) {
	    console.log(weather);

	    //Update the name of the city in the DOM
	    document.getElementById('city').innerHTML = weather.name;
	    var temp = Math.round(1.8 * (weather.main.temp - 273) + 32);

	    //Update the temperature in the DOM
	    document.getElementById('temp').innerHTML = temp;
	    console.log(Math.round(1.8 * (weather.main.temp - 273) + 32));

	    //Update the temperature description in the DOM
	    var tempTitle = weather.weather[0].description;
	    console.log(weather.weather[0].description);
	    document.getElementById('tempTitle').innerHTML = tempTitle;

	    //Update the date information
	    var date = moment().format('MMMM Do YYYY [at] h:mm a');
	    document.getElementById('date').innerHTML = date;
	    console.log(date);
	}
	//Update the title of the city

/***/ }
/******/ ]);