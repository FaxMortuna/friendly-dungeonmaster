document.addEventListener('DOMContentLoaded', function() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navbar-placeholder').innerHTML = html;
      // Hamburger-Menü-Logik erst nach dem Einfügen starten!
      const toggle = document.getElementById('navbarToggle');
      const links = document.getElementById('navbarLinks');
      if (toggle && links) {
        toggle.addEventListener('click', function() {
          links.classList.toggle('show');
        });
      }
    });

  // Dropdown-Menüs auf Mobile per Klick öffnen/schließen
  const dropdowns = document.querySelectorAll('.dropdown > a');
  dropdowns.forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 700) {
        e.preventDefault();
        const parent = this.parentElement;
        parent.classList.toggle('open');
      }
    });
  });
});