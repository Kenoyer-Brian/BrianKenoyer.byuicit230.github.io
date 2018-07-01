        var franklinRequestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=98270&appid=4d7435e62a55c0ffc9930421206a8f9f&units=imperial';
        var franklinRequest = new XMLHttpRequest();
        franklinRequest.open('GET', franklinRequestURL);
        franklinRequest.responseType = 'json';
        franklinRequest.send();
        
        franklinRequest.onload = function() {
            
            var franklinWeather = franklinRequest.response;
            
            var franklinImagesrc = 'https://openweathermap.org/img/w/' + franklinWeather.weather[0].icon + '.png';
            
            document.getElementById('franklinWeatherImage').src = franklinImagesrc;
            
            document.getElementById("franklinTempHigh").innerHTML = "  " + franklinWeather.main.temp_max;
            
            document.getElementById("franklinTempLow").innerHTML = "  " + franklinWeather.main.temp_min;
            
            document.getElementById("franklinTemp").innerHTML = "  " + franklinWeather.main.temp;
            
            document.getElementById("franklinConditions").innerHTML = "  " + franklinWeather.weather[0].description;       
            
            document.getElementById("franklinWindSpeed").innerHTML = "  " + franklinWeather.wind.speed;         

        }