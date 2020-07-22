//W09 Assignment JSON
const requestURL = 'https://evanlo427.github.io/FinalProject/data/scooterdata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const scooters = jsonObject['scooters'];
        const myscooters = scooters.filter(scooter => (scooter.name == 'Preston' || scooter.name == 'Soda Springs' || scooter.name == 'Fish Haven'));

        myscooter.forEach(town => {

            let card = document.createElement('box');
            let scooterDataJson = document.createElement('div');
            let scooterName = document.createElement('h2');
            let scooterMotto = document.createElement('h3');
            let scooterYear = document.createElement('p');
            let scooterPopulation = document.createElement('p');
            let scooterRain = document.createElement('p');
            let image = document.createElement('img');

                townName.innerHTML = `${town.name}`;
                townMotto.innerHTML = `${town.motto}`;
                townYear.innerHTML = `Year Founded: ${town.yearFounded}`;
                townPopulation.innerHTML = `Population: ${town.currentPopulation}`;
                townRain.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`;

                    card.appendChild(scooterDataJson)
                    scooterDataJson.appendChild(townName);
                    scooterDataJson.appendChild(townMotto);
                    scooterDataJson.appendChild(townYear);
                    scooterDataJson.appendChild(townPopulation);
                    scooterDataJson.appendChild(townRain);
                    image.setAttribute('src', `images/${town.photo}`);
                    image.setAttribute('alt', `${town.name}: ${town.motto}`);
                    card.appendChild(image);

            document.querySelector('div.scooterDataJson').appendChild(card);
        });
    });