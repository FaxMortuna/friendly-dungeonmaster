async function fetchRandomNameMale() {
  const [first, last, flavor] = await Promise.all([
    fetch('json/randomname_male/firstNames.json').then(r => r.json()),
    fetch('json/randomname_male/lastNames.json').then(r => r.json()),
    fetch('json/randomname_male/flavors.json').then(r => r.json())
  ]);

  const f = first[Math.floor(Math.random() * first.length)]?.name || '';
  const l = last[Math.floor(Math.random() * last.length)]?.name || '';
  const fl = flavor[Math.floor(Math.random() * flavor.length)]?.name || '';

  document.getElementById('randomNameMaleResult').innerHTML = `${f} ${l}<br> ${fl}`;
}

window.addEventListener('DOMContentLoaded', fetchRandomNameMale);