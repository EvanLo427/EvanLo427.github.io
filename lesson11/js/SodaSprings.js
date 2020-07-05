//W11 Weather API for Soda Springs Idaho #5607916
const requestURL ='https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=d240e58805731cb6287c5e4f95fa6d71';
  
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

//W11 Event API for Soda Springs
const eventAPI = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventAPI)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Could not retrieve current events!');
    }
  })
  .then(jsonObject => {
    const prestonEvents = jsonObject.towns.find(town => {
      return town.name == 'Soda Springs';
    }).events;

    prestonEvents.forEach(event => {
      let p = document.createElement('p');
      p.innerHTML = event;
      document.getElementById('sodasprings-events').appendChild(p);
    });
  })
  .catch(err => {
    document.getElementById('weatherSummary').innerHTML = err;
    document.getElementById('forecastRow').innerHTML = err;
  });