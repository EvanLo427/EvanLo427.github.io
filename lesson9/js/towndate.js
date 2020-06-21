const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(response => {
    return response.json();
  })
  .then(jsonObject => {
    const towns = jsonObject['towns'];

    for (let j = 0; j < towns.length; j++) {
      const cities = ['Preston', 'Fish Haven', 'Soda Springs'];

      if (!cities.includes(towns[j].name)) {
        continue;
      }

      towns[j].motto = towns[j].motto.replace('.', '. <br />');
      let cityCard = document.createElement('div');

      cityCard.classList.add('city');

      let fill = document.createElement('div');

      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let i = document.createElement('i');
      let ul = document.createElement('ul');
      let yearFounded = document.createElement('li');
      let population = document.createElement('li');
      let rainFall = document.createElement('li');
      let img = document.createElement('img');

      h2.textContent = towns[j].name;
      i.innerHTML = towns[j].motto;
      p.appendChild(i);
      yearFounded.textContent = `Year Founded: ${towns[j].yearFounded}`;
      population.textContent = `Population: ${towns[j].currentPopulation}`;
      rainFall.textContent = `Annual Rain Fall: ${towns[j].averageRainfall}`;
      ul.appendChild(yearFounded);
      ul.appendChild(population);
      ul.appendChild(rainFall);

      img.setAttribute('src', `images/${towns[j].photo}`);
      img.setAttribute('alt', towns[j].name);

      fill.appendChild(h2);
      fill.appendChild(p);
      fill.appendChild(ul);
      cityCard.appendChild(fill);
      cityCard.appendChild(img);

      document.getElementById('cities').appendChild(cityCard);
    }
  });