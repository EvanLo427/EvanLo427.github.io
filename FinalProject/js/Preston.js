//W11 Event API for Preston
const ScooterAPI = "/data/scooter.json";

fetch(ScooterAPI)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Could not retrieve current events!');
    }
  })
  .then(jsonObject => {
    const prestonEvents = jsonObject.towns.find(town => {
      return town.name == 'Preston';
    }).events;

    prestonEvents.forEach(event => {
      let p = document.createElement('p');
      p.innerHTML = event;
      document.getElementById('preston-events').appendChild(p);
    });
  })
  .catch(err => {
    document.getElementById('weatherSummary').innerHTML = err;
    document.getElementById('forecastRow').innerHTML = err;
  });