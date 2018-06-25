        var franklinRequestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=98270&appid=4d7435e62a55c0ffc9930421206a8f9f&units=imperial';
        var franklinRequest = new XMLHttpRequest();
        franklinRequest.open('GET', franklinRequestURL);
        franklinRequest.responseType = 'json';
        franklinRequest.send();
        
        franklinRequest.onload = function() {
            
            var franklinWeather = franklinRequest.response;
            
            var franklinImagesrc = 'http://openweathermap.org/img/w/' + franklinWeather.weather[0].icon + '.png';
            
            document.getElementById('franklinWeatherImage').src = franklinImagesrc;
            
            document.getElementById("franklinTempHigh").innerHTML = "  " + franklinWeather.main.temp_max;
            
            document.getElementById("franklinTempLow").innerHTML = "  " + franklinWeather.main.temp_min;
            
            document.getElementById("franklinTemp").innerHTML = "  " + franklinWeather.main.temp;
            
            document.getElementById("franklinConditions").innerHTML = "  " + franklinWeather.weather[0].description;       
            
            document.getElementById("franklinWindSpeed").innerHTML = "  " + franklinWeather.wind.speed;         

        }
        
        var greenvilleRequestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=98046&appid=4d7435e62a55c0ffc9930421206a8f9f&units=imperial';
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