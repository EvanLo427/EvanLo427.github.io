// Weather API for San Miguel de Cozumel, MX
const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&APPID=d240e58805731cb6287c5e4f95fa6d71';
fetch(requestURL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Could not retrieve current weather!');
  })
  .then((jsonObject) => {
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
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
    document.getElementById('temp').innerHTML = Math.round(weatherToday.temp);
    document.getElementById('humidity').innerHTML = weatherToday.humidity;
    document.getElementById('windSpeed').innerHTML = weatherToday.windSpeed;
    document.getElementById('windChill').innerHTML = windChill(
      weatherToday.temp,
      weatherToday.windSpeed,
    );

    for (i = 0; i < jsonObject.list.length; i++) {
      const forecast = jsonObject.list[i];

      if (forecast.dt_txt.slice(-8) == '12:00:00') {
        const td = document.createElement('td');
        const img = document.createElement('img');
        const temp = document.createTextNode(Math.round(forecast.main.temp));

        td.innerHTML = '&#176;';
        td.prepend(temp);

        img.setAttribute(
          'src',
          `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`,
        );
        img.setAttribute('alt', forecast.weather[0].main);

        td.prepend(img);

        document.getElementById('forecastRow').appendChild(td);
      }
    }
  })
  .catch((err) => {
    document.getElementById('weatherSummary').innerHTML = err;
    document.getElementById('forecastRow').innerHTML = err;
  });

//Rentals JSON
const rentalsJSON = '/FinalProject/data/scooterdata.json';
fetch(rentalsJSON)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
      // console.table(jsonObject);  // temporary checking for valid response and data parsing
      const scooters = jsonObject['scooters'];
      const myscooters = scooters.filter(scooter => ( scooter.name == 'Honda PCX150 Scooter'|| scooter.name == 'Honda Pioneer ATV'|| scooter.name == 'Jeep Wrangler - 4 door'));

      myscooters.forEach(scooter => {

          let card = document.createElement('box');
          let scooterDataJson = document.createElement('div');
          let scooterName = document.createElement('h2');
          let scooterMotto = document.createElement('h3');
          let scooterRhalf = document.createElement('p');
          let scooterRfull = document.createElement('p');
          let scooterWhalf = document.createElement('p');
          let scooterWfull = document.createElement('p');
          let scooterPerson = document.createElement('h3');
          let image = document.createElement('img');

              scooterName.innerHTML = `${scooter.name}`;
              scooterMotto.innerHTML = `${scooter.motto}`;
              scooterRhalf.innerHTML = `Reservation Half Day(3hrs): $ ${scooter.reservationHalf}`;
              scooterRfull.innerHTML = `Reservation Full Day: $ ${scooter.reservationFull}`;
              scooterWhalf.innerHTML = `Walk-In Half Day(3hrs): $ ${scooter.walkinHalf}`;
              scooterWfull.innerHTML = `Walk-In Full Day: $ ${scooter.walkinFull}`;
              scooterPerson.innerHTML = `Max. Persons: ${scooter.maxPersons}`;

                  card.appendChild(scooterDataJson)
                  scooterDataJson.appendChild(scooterName);
                  scooterDataJson.appendChild(scooterMotto);
                  scooterDataJson.appendChild(scooterRhalf);
                  scooterDataJson.appendChild(scooterRfull);
                  scooterDataJson.appendChild(scooterWhalf);
                  scooterDataJson.appendChild(scooterWfull);
                  scooterDataJson.appendChild(scooterPerson);
                  image.setAttribute('src', `images/${scooter.photo}`);
                  image.setAttribute('alt', `${scooter.name}: ${scooter.motto}`);
                  card.appendChild(image);

          document.querySelector('div.scooterDataJson').appendChild(card);
      });
  });