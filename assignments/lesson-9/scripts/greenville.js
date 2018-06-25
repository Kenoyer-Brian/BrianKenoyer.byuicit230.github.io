        var greenvilleRequestURL = 'http://api.openweathermap.org/data/2.5/weather?zip=98046&appid=4d7435e62a55c0ffc9930421206a8f9f&units=imperial';
        var greenvilleRequest = new XMLHttpRequest();
        greenvilleRequest.open('GET', greenvilleRequestURL);
        greenvilleRequest.responseType = 'json';
        greenvilleRequest.send();
        
        greenvilleRequest.onload = function() {          
            
            var greenvilleWeather = greenvilleRequest.response;
            
            var greenvilleImagesrc = 'http://openweathermap.org/img/w/' + greenvilleWeather.weather[0].icon + '.png';
            
            document.getElementById('greenvilleWeatherImage').src = greenvilleImagesrc;
            
            document.getElementById("greenvilleTempHigh").innerHTML = "  " + greenvilleWeather.main.temp_max;
            
            document.getElementById("greenvilleTempLow").innerHTML = "  " + greenvilleWeather.main.temp_min;
            
            document.getElementById("greenvilleTemp").innerHTML = "  " + greenvilleWeather.main.temp;
            
            document.getElementById("greenvilleConditions").innerHTML = "  " + greenvilleWeather.weather[0].description;            

            document.getElementById("greenvilleWindSpeed").innerHTML = "  " + greenvilleWeather.wind.speed;            
            
        }