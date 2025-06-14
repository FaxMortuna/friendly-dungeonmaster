async function fetchRandomNameFemale() {
  // Lade alle drei Listen parallel
  const [first, last, flavor] = await Promise.all([
    fetch('json/randomname_female/firstNames.json').then(r => r.json()),
    fetch('json/randomname_female/lastNames.json').then(r => r.json()),
    fetch('json/randomname_female/flavors.json').then(r => r.json())
  ]);

  // Wähle jeweils einen zufälligen Eintrag
  const f = first[Math.floor(Math.random() * first.length)]?.name || '';
  const l = last[Math.floor(Math.random() * last.length)]?.name || '';
  const fl = flavor[Math.floor(Math.random() * flavor.length)]?.name || '';

  document.getElementById('randomNameFemaleResult').textContent = `${f} ${l} ${fl}`;
}

window.addEventListener('DOMContentLoaded', fetchRandomNameFemale);