let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let d = new Date();
let dayName = dayNames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();


let fullDate = dayName + ", " + d.getDate() + " " + monthName + " " + year;

document.getElementById("currentDate").innerHTML = fullDate;

document.getElementById("year").textContent = year;