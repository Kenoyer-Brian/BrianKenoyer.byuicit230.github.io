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
            
        }
        
        
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
        }
        
        
        var springfieldRequestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=98292&appid=4d7435e62a55c0ffc9930421206a8f9f&units=imperial';
        var springfieldRequest = new XMLHttpRequest();
        springfieldRequest.open('GET', springfieldRequestURL);
        springfieldRequest.responseType = 'json';
        springfieldRequest.send();
        
        springfieldRequest.onload = function() {
            
            var springfieldWeather = springfieldRequest.response;
            
            var springfieldImagesrc = 'https://openweathermap.org/img/w/' + springfieldWeather.weather[0].icon + '.png';
            
            document.getElementById('springfieldWeatherImage').src = springfieldImagesrc;
            
            document.getElementById("springfieldTempHigh").innerHTML = "  " + springfieldWeather.main.temp_max;
            
            document.getElementById("springfieldTempLow").innerHTML = "  " + springfieldWeather.main.temp_min;
            
            document.getElementById("springfieldTemp").innerHTML = "  " + springfieldWeather.main.temp;
            
            document.getElementById("springfieldConditions").innerHTML = "  " + springfieldWeather.weather[0].description;
            
            document.getElementById("springfieldWindSpeed").innerHTML = "  " + springfieldWeather.wind.speed; 
                
        }
        
        var springfieldDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
        var springfieldData = new XMLHttpRequest();
        springfieldData.open('GET', springfieldDataURL);
        springfieldData.responseType = 'json';
        springfieldData.send();
        
        springfieldData.onload = function() {   
            
            var springfieldInfo = springfieldData.response;            
            
            document.getElementById("springfieldTownName").innerHTML = "  " + springfieldInfo.towns[3].name;
            
            document.getElementById("springfieldTownMotto").innerHTML = "  " + springfieldInfo.towns[3].motto;
        }
        