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

        
        var franklinDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
        var franklinData = new XMLHttpRequest();
        franklinData.open('GET', franklinDataURL);
        franklinData.responseType = 'json';
        franklinData.send();
        
        franklinData.onload = function() {   
            
            var franklinInfo = franklinData.response;            
            
            document.getElementById("franklinTownName").innerHTML = "  " + franklinInfo.towns[0].name;
            
            document.getElementById("franklinTownMotto").innerHTML = "  " + franklinInfo.towns[0].motto;
                        
            document.getElementById("franklinEvent1").innerHTML = "  " + franklinInfo.towns[0].events[0];
            
            document.getElementById("franklinEvent2").innerHTML = "  " + franklinInfo.towns[0].events[1];
            
            document.getElementById("franklinEvent3").innerHTML = "  " + franklinInfo.towns[0].events[2];
            
        }