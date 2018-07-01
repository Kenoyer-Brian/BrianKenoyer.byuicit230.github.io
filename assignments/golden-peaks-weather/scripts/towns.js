        var franklinTownURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
        var franklinTown = new XMLHttpRequest();
        franklinTown.open('GET', franklinTownURL);
        franklinTown.responseType = 'json';
        franklinTown.send();
        
        franklinTown.onload = function() {
            
            var franklinInfo = franklinTown.response;
                
            document.getElementById("franklinName").innerHTML = franklinInfo.towns['name'];

        }
        
        var greenvilleTownURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
        var greenvilleTown = new XMLHttpRequest();
        greenvilleTown.open('GET', greenvilleTownURL);
        greenvilleTown.responseType = 'json';
        greenvilleTown.send();
        
        greenvilleTown.onload = function() {          
            
            var greenvilleInfo = greenvilleTown.response;
                        
            document.getElementById("greenvilleName").innerHTML = "  " + greenvilleInfo.towns[1].name;                       
            
        }
        
        var springfieldTownURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
        var springfieldTown = new XMLHttpRequest();
        springfieldTown.open('GET', springfieldTownURL);
        springfieldTown.responseType = 'json';
        springfieldTown.send();
        
        springfieldTown.onload = function() {
            
            var springfieldInfo = springfieldTown.response;
                
            document.getElementById("springfieldName").innerHTML = "  " + springfieldInfo.towns[3].name;
                        
        }