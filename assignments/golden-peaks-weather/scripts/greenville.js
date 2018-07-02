        var greenvilleRequestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=98046&appid=4d7435e62a55c0ffc9930421206a8f9f&units=imperial';
        var greenvilleRequest = new XMLHttpRequest();
        greenvilleRequest.open('GET', greenvilleRequestURL);
        greenvilleRequest.responseType = 'json';
        greenvilleRequest.send();
        
        greenvilleRequest.onload = function() {          
            
            var greenvilleWeather = greenvilleRequest.response;
            
            var greenvilleImagesrc = 'https://openweathermap.org/img/w/' + greenvilleWeather.weather[0].icon + '.png';
            
            document.getElementById('greenvilleWeatherImage').src = greenvilleImagesrc;
            
            document.getElementById("greenvilleTempHigh").innerHTML = "  " + greenvilleWeather.main.temp_max;
            
            document.getElementById("greenvilleTempLow").innerHTML = "  " + greenvilleWeather.main.temp_min;
            
            document.getElementById("greenvilleTemp").innerHTML = "  " + greenvilleWeather.main.temp;
            
            document.getElementById("greenvilleConditions").innerHTML = "  " + greenvilleWeather.weather[0].description;            

            document.getElementById("greenvilleWindSpeed").innerHTML = "  " + greenvilleWeather.wind.speed;            
            
        }
        
        var greenvilleDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
        var greenvilleData = new XMLHttpRequest();
        greenvilleData.open('GET', greenvilleDataURL);
        greenvilleData.responseType = 'json';
        greenvilleData.send();
        
        greenvilleData.onload = function() {   
            
            var greenvilleInfo = greenvilleData.response;            
            
            document.getElementById("greenvilleTownName").innerHTML = "  " + greenvilleInfo.towns[1].name;
            
            document.getElementById("greenvilleTownMotto").innerHTML = "  " + greenvilleInfo.towns[1].motto;
            
            document.getElementById("greenvilleEvent1").innerHTML = "  " + greenvilleInfo.towns[1].events[0];
            
            document.getElementById("greenvilleEvent2").innerHTML = "  " + greenvilleInfo.towns[1].events[1];
            
            document.getElementById("greenvilleEvent3").innerHTML = "  " + greenvilleInfo.towns[1].events[2];
            
            document.getElementById("greenvilleEvent4").innerHTML = "  " + greenvilleInfo.towns[1].events[3];
        }