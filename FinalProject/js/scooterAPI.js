//W09 Assignment JSON
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
            let scooterMaxPersons = document.createElement('p');
            let scooterRHalfDay = document.createElement('p');
            let scooterRFullDay = document.createElement('p');
            let scooterWHalfDay = document.createElement('p');
            let scooterWFullDay = document.createElement('p');
            let image = document.createElement('img');

                scooterName.innerHTML = `${scooter.name}`;
                scooterMotto.innerHTML = `${scooter.motto}`;
                scooterMaxPersons.innerHTML = `Year Founded: ${scooter.yearFounded}`;
                scooterRHalfDay.innerHTML = `Reservation Half Day(3 hrs) : $ ${scooter.currentPopulation}`;
                scooterRFullDay.innerHTML = `Reservation Full Day: $ ${scooter.currentPopulation}`;
                scooterWHalfDay.innerHTML = `Walk-in Half Day(3 hrs) : $ ${scooter.currentPopulation}`;
                scooterWFullDay.innerHTML = `Walk-in Full Day: $ ${scooter.currentPopulation}`;

                    card.appendChild(scooterDataJson)
                    scooterDataJson.appendChild(scooterName);
                    scooterDataJson.appendChild(scooterMaxPersons);
                    scooterDataJson.appendChild(scooterRHalfDay);
                    scooterDataJson.appendChild(scooterRFullDay);
                    scooterDataJson.appendChild(scooterRHalfDay);
                    scooterDataJson.appendChild(scooterFullDay);
                    image.setAttribute('src', `images/${scooter.photo}`);
                    image.setAttribute('alt', `${scooter.name}: ${scooter.motto}`);
                    card.appendChild(image);

            document.querySelector('div.scooterDataJson').appendChild(card);
        });
    });