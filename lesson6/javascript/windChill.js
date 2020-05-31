let temp = parseFloat(document.getElementById('temp').textContent);
let windSpeed = parseFloat(document.getElementById('windSpeed').textContent);

let windChill = windChillCalc(temp, windSpeed);

document.getElementById('windChillOutput').textContent = windChill;


function windChillCalc(temp, windSpeed) {

    if (temp <= 50 && windSpeed >= 3) {
        let chillCalc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, .16) + .4275 * temp * Math.pow(windSpeed, .16);
        return Math.round(chillCalc * 10) / 10;
    } else {
        return 'N/A';
    }

}
