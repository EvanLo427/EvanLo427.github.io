const requestURL = 'https://evanlo427.github.io/FinalProject/data/scooterdata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const scooters = jsonObject['scooters'];
        const myScooters = scooters.filter(scooter => (scooter.name == 'Honda Metro Scooter' || scooter.name == 'Honda Dio Scooter' || scooter.name == 'Honda PCX150 Scooter' || scooter.name == 'Honda Pioneer ATV' || scooter.name == 'Jeep Wrangler - 4 door with a/c' || scooter.name == 'Jeep Wrangler - 2 door'));

        myScooters.forEach(scooter => {

            let card = document.createElement('box');
            let scooterDataJson = document.createElement('div');
            let scooterName = document.createElement('h2');
            let scooterMotto = document.createElement('h3');
            let scooterMaxpersons = document.createElement('p');
            let scooterRhalfday = document.createElement('p');
            let scooterRfullDay = document.createElement('p');
            let scooterWhalfDay = document.createElement('p');
            let scooterWfullDay = document.createElement('p');
            let image = document.createElement('img');

                scooterName.innerHTML = `${scooter.name}`;
                scooterMotto.innerHTML = `${scooter.motto}`;
                scooterMaxpersons.innerHTML = `Year Founded: ${scooter.maxPersons}`;
                scooterRhalfday.innerHTML = `Reservation Half Day(3 hrs) : $ ${scooter.reservationHalfday}`;
                scooterRfullDay.innerHTML = `Reservation Full Day: $ ${scooter.reservationFullday}`;
                scooterWhalfDay.innerHTML = `Walk-in Half Day(3 hrs) : $ ${scooter.walkinHalfday}`;
                scooterWfullDay.innerHTML = `Walk-in Full Day: $ ${scooter.walkinFullday}`;

                    card.appendChild(scooterDataJson)
                    scooterDataJson.appendChild(scooterName);
                    scooterDataJson.appendChild(scooterMaxpersons);
                    scooterDataJson.appendChild(scooterRhalfday);
                    scooterDataJson.appendChild(scooterRfullDay);
                    scooterDataJson.appendChild(scooterWhalfday);
                    scooterDataJson.appendChild(scooterWfullDay);
                    image.setAttribute('src', `images/${scooter.photo}`);
                    image.setAttribute('alt', `${scooter.name}: ${scooter.motto}`);
                    card.appendChild(image);

            document.querySelector('div.scooterDataJson').appendChild(card);
        });
    });