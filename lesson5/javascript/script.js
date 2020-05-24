//modifieddate
let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let d = new Date();
let dayName = dayNames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();

let fullDate = dayName + ", " + monthName + " " + d.getDate() + ", " + year;

document.getElementById("currentDate").innerHTML = fullDate;

document.getElementById("year").textContent = year;

const hambutton= document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

//Toggle Menu
function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}

//Show Banner
let today = new Date();
let day= today.getDay();
var disp = day;

if (day == 5) {
    
}

document.getElementById("banner").style.display = disp;