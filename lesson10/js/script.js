//modifieddate
let date = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("currentDate").innerHTML = days[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();
document.getElementById("year").textContent = new Date().getFullYear();

//Toggle Menu
const hambutton= document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}

//Show Banner
let d = new Date();
let dayOfWeek = d.getDay();

if (dayOfWeek == 5) {
    document.getElementById("notice").style.display = 'block';
} else {
    document.getElementById("notice").style.display = 'none';
}


//W06 Weather API
function windChill(t, s) {
    if (t > 50 || s <= 3) {
      return 'N/A';
    }
    const wc = Math.round(
      35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)
    );
  
    return `${wc}&#176;F`;
  }

//W10 Weather API
const requestURL ='https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=d240e58805731cb6287c5e4f95fa6d71';
  
    fetch(requestURL)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Could not retrieve current weather!');
      }
    })
    .then(jsonObject => {
      const resToday = jsonObject.list[0];
  
      const weatherToday = {
        currently: resToday.weather[0].description,
        temp: resToday.main.temp,
        windSpeed: resToday.wind.speed,
        humidity: resToday.main.humidity,
      };
  
      document.getElementById('currently').innerHTML = weatherToday.currently
        .toLowerCase()
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
      document.getElementById('temp').innerHTML = Math.round(weatherToday.temp);
      document.getElementById('humidity').innerHTML = weatherToday.humidity;
      document.getElementById('windSpeed').innerHTML = weatherToday.windSpeed;
      document.getElementById('windChill').innerHTML = windChill(
        weatherToday.temp,
        weatherToday.windSpeed
      );
  
      for (i = 0; i < jsonObject.list.length; i++) {
        let forecast = jsonObject.list[i];
  
        if (forecast.dt_txt.slice(-8) == '18:00:00') {
          let td = document.createElement('td');
          let img = document.createElement('img');
          let temp = document.createTextNode(Math.round(forecast.main.temp));
  
          td.innerHTML = '&#176;';
          td.prepend(temp);
  
          img.setAttribute(
            'src',
            `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`
          );
          img.setAttribute('alt', forecast.weather[0].main);
  
          td.prepend(img);
  
          document.getElementById('forecastRow').appendChild(td);
        }
      }
    })
    .catch(err => {
      document.getElementById('weatherSummary').innerHTML = err;
      document.getElementById('forecastRow').innerHTML = err;
    });