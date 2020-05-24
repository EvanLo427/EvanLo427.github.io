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
  
  let _currentDate = document.getElementById('current-date');
  let _currentYear = document.getElementById('current-year');
  
  now = new Date();
  
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  let dayOfWeek = days[now.getDay()];
  let month = months[now.getMonth()];
  let day = now.getFullYear();
  let year = now.getFullYear();
  
  _currentDate.innerHTML = `${dayOfWeek}, ${day} ${month} ${year}`;
  _currentYear.innerHTML = now.getFullYear();
  
  let nav = 'preston';
  
  function changeNav(navID) {
    document.getElementById(navID).classList.add('highlight');
    if (nav !== navID) {
      document.getElementById(nav).classList.remove('highlight');
      nav = navID;
    }
  }
  
  changeNav('preston');
  
  let d = new Date();
  
  if (d.getDay() == 5) {
    document.getElementById('banner').classList.add('show-banner');
  }
  