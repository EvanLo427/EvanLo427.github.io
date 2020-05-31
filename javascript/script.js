let today = new Date();
let date = today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

let dateModified = document.lastModified;
document.getElementById('dateandtime').innerHTML = dateModified