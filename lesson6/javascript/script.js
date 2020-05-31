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
let today = new Date();
let day= today.getDay();
var disp = day;

if (day == 5) {
    
}

document.getElementById("banner").style.display = disp;