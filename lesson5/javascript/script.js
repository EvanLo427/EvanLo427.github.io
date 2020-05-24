function toggleMenu() {
    let menu = document.getElementById('menu-list');
    let menuToggle = document.getElementById('menu-toggle');
  
    if (!menu.classList.contains('show-menu')) {
      menu.classList.add('show-menu');
      menuToggle.innerHTML = 'Close';
      menuToggle.classList.add('active-menu');
    } else {
      menu.classList.remove('show-menu');
      menuToggle.innerHTML = '&#9776; Menu';
      menuToggle.classList.remove('active-menu');
    }
  }
let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let d = new Date();
let dayName = dayNames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();

let fullDate = dayName + ", " + monthName + " " + d.getDate() + ", " + year;

document.getElementById("currentDate").innerHTML = fullDate;

document.getElementById("year").textContent = year;