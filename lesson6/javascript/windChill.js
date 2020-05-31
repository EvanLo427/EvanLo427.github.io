
let windSpeed = 11;
let air = 40;
let windChill;
if (air <= 50 && air > 3) {
    windChill = 35.74 + .6215 * air - 35.75 * Math.pow(windSpeed, .16) + .4275 * air * Math.pow(windSpeed, .16);
    windChill = Math.round(windChill);
    windChill += "°F";
}
else {
    windChill = "N/A";
}


document.getElementById('windspeedspan').innerHTML = windSpeed;
document.getElementById('airspan').innerHTML = air;
document.getElementById('windchillspan').innerHTML = windChill;