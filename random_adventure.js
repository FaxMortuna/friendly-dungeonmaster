async function fetchRandomAdventure() {
  const [d1, d2, d3] = await Promise.all([
    fetch('json/random_adventure/detail1.json').then(r => r.json()),
    fetch('json/random_adventure/detail2.json').then(r => r.json()),
    fetch('json/random_adventure/detail3.json').then(r => r.json())
  ]);

  const part1 = d1[Math.floor(Math.random() * d1.length)]?.name || '';
  const part2 = d2[Math.floor(Math.random() * d2.length)]?.name || '';
  const part3 = d3[Math.floor(Math.random() * d3.length)]?.name || '';

  document.getElementById('randomAdventureResult').textContent = `${part1} ${part2} ${part3}`;
}

window.addEventListener('DOMContentLoaded', fetchRandomAdventure);