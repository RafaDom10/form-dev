const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

const toggleSwitch = document.querySelector('.toggle');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');

// Dark and Light Styles
function toggleDarkLightMode(isLight) {
  toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
  isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') :
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');  
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', DARK_THEME);
    localStorage.setItem('theme', DARK_THEME);
    toggleDarkLightMode(false);
  } else {
    document.documentElement.setAttribute('data-theme', LIGHT_THEME);
    localStorage.setItem('theme', LIGHT_THEME);
    toggleDarkLightMode(true);
  }
}

toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(false);
  }
}

/* modal  */
const openModal = () => {
  let overlay = document.getElementById("overlay");
  let modal = document.getElementById("modal");
  overlay.style.display = 'flex'
  modal.style.display = 'flex'
  setTimeout(() => { document.addEventListener('click', handleClickOutside, false) }, 200);
}

const handleClickOutside = (event) => {
  let overlay = document.getElementById("overlay");
  let modal = document.getElementById("modal");

  if (!modal.contains(event.target)) {
      modal.style.display = 'none';
      overlay.style.display = 'none';
      document.removeEventListener('click', handleClickOutside, false);
  }
}
