//W09 Assignment JSON
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const myTowns = towns.filter(town => (town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven'));

        myTowns.forEach(town => {

            let card = document.createElement('box');
            let townDataJson = document.createElement('div');
            let townName = document.createElement('h2');
            let townMotto = document.createElement('h3');
            let townYear = document.createElement('p');
            let townPopulation = document.createElement('p');
            let townRain = document.createElement('p');
            let image = document.createElement('img');

                townName.innerHTML = `${town.name}`;
                townMotto.innerHTML = `${town.motto}`;
                townYear.innerHTML = `Year Founded: ${town.yearFounded}`;
                townPopulation.innerHTML = `Population: ${town.currentPopulation}`;
                townRain.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`;

                    card.appendChild(townDataJson)
                    townDataJson.appendChild(townName);
                    townDataJson.appendChild(townMotto);
                    townDataJson.appendChild(townYear);
                    townDataJson.appendChild(townPopulation);
                    townDataJson.appendChild(townRain);
                    image.setAttribute('src', `images/${town.photo}`);
                    image.setAttribute('alt', `${town.name}: ${town.motto}`);
                    card.appendChild(image);

            document.querySelector('div.townDataJson').appendChild(card);
        });
    });