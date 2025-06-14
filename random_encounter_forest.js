async function fetchRandomEncounterForest() {
  const data = await fetch('json/random_encounter/random_encounter_forest.json').then(r => r.json());
  const random = data[Math.floor(Math.random() * data.length)]?.field1 || '';
  document.getElementById('randomEncounterForestResult').textContent = random;
}

window.addEventListener('DOMContentLoaded', fetchRandomEncounterForest);