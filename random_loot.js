async function fetchRandomLoot() {
  const data = await fetch('json/random_loot.json').then(r => r.json());
  const random = data[Math.floor(Math.random() * data.length)]?.loot || '';
  document.getElementById('randomLootResult').textContent = random;
}

window.addEventListener('DOMContentLoaded', fetchRandomLoot);