//Rentals JSON
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