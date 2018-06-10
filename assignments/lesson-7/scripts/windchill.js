	var tempH = +document.getElementById("tempHigh").innerHTML; 

	var tempL = +document.getElementById("tempLow").innerHTML; 

	var speed = +document.getElementById("windSpeed").innerHTML;

    var averageTemp = (tempH + tempL) / 2; 
	
	var power = Math.pow(speed,0.16); 
	
	var calWindChill = 35.74 + (0.6215 * averageTemp) - 35.75 * power + 0.4275 * averageTemp * power; 
	
    document.getElementById("windChill").innerHTML = "Wind Chill = " + Math.round(calWindChill) + " &deg;F"; 
