let body = document.body;
const themeIcon = document.querySelector('.theme-icon');

// Apply saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  body.classList.remove('light-theme');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
} else {
  body.classList.add('light-theme');
  body.classList.remove('dark-theme');
  themeIcon.classList.remove('fa-sun');
  themeIcon.classList.add('fa-moon');
}

function switchTheme() {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
  }
}
const m = document.querySelector(".m");
const menu_bar = document.querySelector(".navbar-menu .menu-bar");
m.addEventListener("click",()=>{menu_bar.classList.toggle("show")
  
})
  function shareApp() {
    if (navigator.share) {
      navigator.share({
        title: 'Amazing Student App',
        text: 'Check out this amazing 👌 app useful to all students!',
        url: 'https://warehouse.appilix.com/uploads/app-apk-6881c2a38a577-1753334435.apk'
      })
      .then(() => console.log('Thanks for sharing!'))
      .catch((err) => console.log('Sharing failed', err));
    } else {
      alert("Sharing not supported on this browser.");
    }
  }