        var springfieldRequestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=98292&appid=4d7435e62a55c0ffc9930421206a8f9f&units=imperial';
        var springfieldRequest = new XMLHttpRequest();
        springfieldRequest.open('GET', springfieldRequestURL);
        springfieldRequest.responseType = 'json';
        springfieldRequest.send();
        
        springfieldRequest.onload = function() {
            
            var springfieldWeather = springfieldRequest.response;
            
            var springfieldImagesrc = 'http://openweathermap.org/img/w/' + springfieldWeather.weather[0].icon + '.png';
            
            document.getElementById('springfieldWeatherImage').src = springfieldImagesrc;
            
            document.getElementById("springfieldTempHigh").innerHTML = "  " + springfieldWeather.main.temp_max;
            
            document.getElementById("springfieldTempLow").innerHTML = "  " + springfieldWeather.main.temp_min;
            
            document.getElementById("springfieldTemp").innerHTML = "  " + springfieldWeather.main.temp;
            
            document.getElementById("springfieldConditions").innerHTML = "  " + springfieldWeather.weather[0].description;
            
            document.getElementById("springfieldWindSpeed").innerHTML = "  " + springfieldWeather.wind.speed; 
                
        }