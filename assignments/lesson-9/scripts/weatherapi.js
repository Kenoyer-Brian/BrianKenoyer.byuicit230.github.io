//connection to API
var weatherRequest = new XMLHttpRequest();
var apiURL = 'http://api.openweathermap.org/data/2.5/weather?&id=4156210&appid=4d7435e62a55c0ffc9930421206a8f9f&units=imperial';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherRequest.responseText);
    
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    var imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById('weatherimage').src = imagesrc;
}
