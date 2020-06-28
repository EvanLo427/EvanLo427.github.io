const requestURL ="https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let bdate = document.createElement("p");
      let bplace = document.createElement("p");
      let images = document.createElement("img");

      h2.textContent = prophets[i].name + " " + prophets[i].lastname;
      card.appendChild(h2);
      bdate.textContent = "Date of Birth:" + " " + prophets[i].birthdate;
      card.appendChild(bdate);
      bplace.textContent = "Place of Birth:" + " " + prophets[i].birthplace;
      card.appendChild(bplace);
      images.setAttribute("src", prophets[i].imageurl);
      images.setAttribute("alt", prophets[i].name + " " + prophets[i].lastname + "-" + prophets[i].order);
      card.appendChild(images);

      document.querySelector("div.cards").appendChild(card);
    }
  });
