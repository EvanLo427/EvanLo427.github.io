//W09 Assignment JSON
const requestURL = 'https://evanlo427.github.io/FinalProject/data/scooter.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const scooter = jsonObject['scooter'];
        const myScooter = towns.filter(town => (RentalType.name == 'Honda Metro Scooter' || RentalType.name == 'Honda Dio Scooter' || RentalType.name == 'Honda PCX150 Scooter' || RentalType.name == 'Honda Pioneer ATV' || RentalType.name == 'Jeep Wrangler - 4 door with a/c' || RentalType.name == 'Jeep Wrangler - 2 door'));

        myScooter.forEach(scooter => {

            let card = document.createElement('box');
            let townDataJson = document.createElement('div');
            let townName = document.createElement('h2');
            let townMotto = document.createElement('h3');
            let townYear = document.createElement('p');
            let townPopulation = document.createElement('p');
            let townRain = document.createElement('p');
            let image = document.createElement('img');

                scooterName.innerHTML = `${scooter.name}`;
                scooterMotto.innerHTML = `${town.motto}`;
                scooterYear.innerHTML = `Year Founded: ${town.yearFounded}`;
                scooterPopulation.innerHTML = `Population: ${town.currentPopulation}`;
                scooterRain.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`;

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