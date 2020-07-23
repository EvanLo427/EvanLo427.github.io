//W09 Assignment JSON
const requestURL = '/FinalProject/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const myTowns = towns.filter(town => (town.name == 'Honda Metro Scooter' || town.name == 'Honda Dio Scooter' || town.name == 'Honda PCX150 Scooter'|| town.name == 'Honda Pioneer ATV'|| town.name == 'Jeep Wrangler - 4 door'|| town.name == 'Jeep Wrangler - 2 door'));

        myTowns.forEach(town => {

            let card = document.createElement('box');
            let townDataJson = document.createElement('div');
            let townName = document.createElement('h2');
            let townMotto = document.createElement('h3');
            let townYear = document.createElement('p');
            let townPopulation = document.createElement('p');
            let townRain = document.createElement('p');
            let townBain = document.createElement('p');
            let image = document.createElement('img');

                townName.innerHTML = `${town.name}`;
                townMotto.innerHTML = `${town.motto}`;
                townYear.innerHTML = `Reservation Half Day(3hrs): $ ${town.reservationHalf}`;
                townPopulation.innerHTML = `Reservation Full Day: $ ${town.reservationFull}`;
                townRain.innerHTML = `Walk-In Half Day(3hrs): $ ${town.walkinHalf}`;
                townBain.innerHTML = `Walk-In Full Day: $ ${town.walkinFull}`;

                    card.appendChild(townDataJson)
                    townDataJson.appendChild(townName);
                    townDataJson.appendChild(townMotto);
                    townDataJson.appendChild(townYear);
                    townDataJson.appendChild(townPopulation);
                    townDataJson.appendChild(townRain);
                    townDataJson.appendChild(townBain);
                    image.setAttribute('src', `images/${town.photo}`);
                    image.setAttribute('alt', `${town.name}: ${town.motto}`);
                    card.appendChild(image);

            document.querySelector('div.townDataJson').appendChild(card);
        });
    });