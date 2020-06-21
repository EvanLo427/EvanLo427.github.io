//modifieddate
let date = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("currentDate").innerHTML = days[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();
document.getElementById("year").textContent = new Date().getFullYear();

//Toggle Menu
const hambutton= document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}

//Show Banner
let d = new Date();
let dayOfWeek = d.getDay();

if (dayOfWeek == 5) {
    document.getElementById("notice").style.display = 'block';
} else {
    document.getElementById("notice").style.display = 'none';
}


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

            let card = document.createElement('div');
            let townData = document.createElement('div');
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

                    card.appendChild(townData)
                    townData.appendChild(townName);
                    townData.appendChild(townMotto);
                    townData.appendChild(townYear);
                    townData.appendChild(townPopulation);
                    townData.appendChild(townRain);
                    image.setAttribute('src', `images/${town.photo}`);
                    image.setAttribute('alt', `${town.name}: ${town.motto}`);
                    card.appendChild(image);

            document.querySelector('div.townData').appendChild(card);
        });
    });