const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject); // temporary checking for valid response and data parsing
      const towns = jsonObject['towns'];

      const southernTowns = towns.filter(town => (town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven'));

      southernTowns.forEach(town => {

        let eachTown = document.createElement('article');
        let townContainer = document.createElement('div');
        let townName = document.createElement('h2');
        let townMotto = document.createElement('h3');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let annualRain = document.createElement('p');
        let image = document.createElement('img');

        eachTown.appendChild(townContainer);
        eachTown.appendChild(image);

        townName.innerHTML = `${town.name}`;
        townContainer.appendChild(townName);

        townMotto.innerHTML = `${town.motto}`;
        townContainer.appendChild(townMotto);

        yearFounded.innerHTML = `Year Founded: ${town.yearFounded}`;
        townContainer.appendChild(yearFounded);

        population.innerHTML = `Population: ${town.currentPopulation}`;
        townContainer.appendChild(population);

        annualRain.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`;
        townContainer.appendChild(annualRain);

        image.setAttribute('src', `images/${town.photo}`);
        image.setAttribute('alt', `${town.name}: ${town.motto}`);
        
        document.querySelector('div.townContainer').appendChild(eachTown);

      });
    });