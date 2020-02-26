// Dark Mode
function checkDarkMode() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true;
  }
  // Add toggle rules - check Hylia for some guidance
  // https://github.com/hankchizljaw/hylia/blob/master/src/js/components/theme-toggle.js
  return false;
}

if (checkDarkMode()) {
  document.documentElement.classList.add('mode-dark');
} else {
  document.documentElement.classList.remove('mode-dark');
}
