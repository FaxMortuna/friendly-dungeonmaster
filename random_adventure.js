

function fetchRandomAdventure() {
  fetch('/api/random_adventure')
    .then(r => r.json())
    .then(d => {
      const text = d.name || '';
      document.getElementById('randomAdventureResult').textContent = text;
    });
}

window.addEventListener('DOMContentLoaded', fetchRandomAdventure);