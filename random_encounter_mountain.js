let lastIndex = -1;

async function fetchRandomEncounterMountain() {
  const data = await fetch('json/random_encounter/random_encounter_mountain.json').then(r => r.json());
  let index;
  if (data.length === 1) {
    index = 0;
  } else {
    do {
      index = Math.floor(Math.random() * data.length);
    } while (index === lastIndex);
  }
  lastIndex = index;
  const random = data[index]?.name || '';

  document.getElementById('randomEncounterMountainResult').textContent = random;
}

window.addEventListener('DOMContentLoaded', fetchRandomEncounterMountain);