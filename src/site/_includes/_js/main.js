// Dark Mode

const SELECTORS = {
  toggleBtn: '.js-darkmode-toggle'
}
const CLASSES = {
  darkMode: 'mode-dark'
}

const STORAGE_KEY = 'darkMode'
const COLOR_SCHEME_KEY = '--color-scheme'

class DarkMode {
  constructor() {
    this.toggleBtn = document.querySelector(SELECTORS.toggleBtn)
    this.isActive = false

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggle())
    }

    this.init()
  }

  getSystemPreference() {
    let response = getComputedStyle(
      document.documentElement
    ).getPropertyValue(COLOR_SCHEME_KEY)

    if (response.length) {
      return response.replace(/\"/g, '').trim()
    }

    return null
  }

  init() {
    if (this.hasLocalStorage()) {
      const systemPreference = this.getSystemPreference()
      const storedSetting = localStorage.getItem(STORAGE_KEY)

      let preference
      if (storedSetting) {
        preference = storedSetting === 'true'
      } else if (systemPreference) {
        preference = systemPreference === 'dark'
      }

      this.toggle(preference)
    }
  }

  toggle(force) {
    this.isActive = typeof force === 'boolean' ? force : !this.isActive
    document.documentElement.classList.toggle(
      CLASSES.darkMode,
      this.isActive
    )
    this.toggleBtn.setAttribute('aria-checked', String(this.isActive))

    if (this.hasLocalStorage()) {
      localStorage.setItem(STORAGE_KEY, this.isActive)
    }
  }

  hasLocalStorage() {
    return typeof Storage !== 'undefined'
  }
}

if (window.CSS && CSS.supports('color', 'var(--fake-var)')) {
  new DarkMode()
}

/*
 * Search by Phil Hawksworth
 * Source: https://github.com/philhawksworth/hawksworx.com/blob/master/src/js/search.js
 * Read: https://www.hawksworx.com/blog/adding-search-to-a-jamstack-site/
 */

// Search Part 1
// Bypass the link if JavaScript is enabled; display Search UI
function btnHandler(e, t) {
  var n = document.querySelector(e);
  n && n.addEventListener("click", function(e) {
    e.preventDefault(), t()
  }, !1)
}
// Allow escape key to close Search UI
document.addEventListener('keyup', function (e) {
     if (e.key === "Escape") { // escape key maps to keycode `27`
        document.querySelector(".search-ui").classList.add("hidden");
    }
});

// Search Part 2
// Find matching results; hide Search UI if icon clicked
btnHandler("#search-link", function() {
  var l = null,
    e = document.querySelector(".search-ui"),
    i = document.querySelector(".search-results"),
    n = document.querySelector("#search-str"),
    a = function() {
      for (; i.firstChild;) i.removeChild(i.firstChild);
    };
  fetch("/search.json").then(function(e) {
    return e.json()
  }).then(function(e) {
    l = e.search
  }), e.classList.toggle("hidden"), n.focus(), n.addEventListener("keyup", function(e) {
    var t = n.value;
    2 < t.length ? function(e) {
      e = e.toLowerCase();
      var t = [];
      for (var n in l) - 1 != l[n].text.indexOf(e) && t.push(l[n]);
      for (var n in a(), t) {
        var r = document.createElement("li"),
          o = document.createElement("a");
        o.textContent = t[n].title, o.setAttribute("href", t[n].url), r.appendChild(o), i.appendChild(r), r.classList.add("py-4", "px-2","border-t")
      }
    }(t) : a()
  })
});
