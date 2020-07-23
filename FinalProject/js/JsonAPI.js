//W09 Assignment JSON
const requestURL = '/FinalProject/data/scooterdata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const scooters = jsonObject['scooters'];
        const myscooters = scooters.filter(scooter => (scooter.name == 'Honda Metro Scooter' || scooter.name == 'Honda Dio Scooter' || scooter.name == 'Honda PCX150 Scooter'|| scooter.name == 'Honda Pioneer ATV'|| scooter.name == 'Jeep Wrangler - 4 door'|| scooter.name == 'Jeep Wrangler - 2 door'));

        myscooters.forEach(scooter => {

            let card = document.createElement('box');
            let scooterDataJson = document.createElement('div');
            let scooterName = document.createElement('h2');
            let scooterMotto = document.createElement('h3');
            let scooterYear = document.createElement('p');
            let scooterPopulation = document.createElement('p');
            let scooterRain = document.createElement('p');
            let scooterBain = document.createElement('p');
            let image = document.createElement('img');

                scooterName.innerHTML = `${scooter.name}`;
                scooterMotto.innerHTML = `${scooter.motto}`;
                scooterYear.innerHTML = `Reservation Half Day(3hrs): $ ${scooter.reservationHalf}`;
                scooterPopulation.innerHTML = `Reservation Full Day: $ ${scooter.reservationFull}`;
                scooterRain.innerHTML = `Walk-In Half Day(3hrs): $ ${scooter.walkinHalf}`;
                scooterBain.innerHTML = `Walk-In Full Day: $ ${scooter.walkinFull}`;

                    card.appendChild(scooterDataJson)
                    scooterDataJson.appendChild(scooterName);
                    scooterDataJson.appendChild(scooterMotto);
                    scooterDataJson.appendChild(scooterYear);
                    scooterDataJson.appendChild(scooterPopulation);
                    scooterDataJson.appendChild(scooterRain);
                    scooterDataJson.appendChild(scooterBain);
                    image.setAttribute('src', `images/${scooter.photo}`);
                    image.setAttribute('alt', `${scooter.name}: ${scooter.motto}`);
                    card.appendChild(image);

            document.querySelector('div.scooterDataJson').appendChild(card);
        });
    });