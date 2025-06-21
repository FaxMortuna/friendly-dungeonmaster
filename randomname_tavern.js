
let lastFirstIndex = -1;
let lastLastIndex = -1;
let lastFlavorIndex = -1;

async function fetchRandomNameTavern() {
  const [first, last, flavor] = await Promise.all([
    fetch('json/randomname_tavern/randomname_tavern_first.json').then(r => r.json()),
    fetch('json/randomname_tavern/randomname_tavern_second.json').then(r => r.json()),
    fetch('json/randomname_tavern/randomname_tavern_flavor.json').then(r => r.json())
  ]);

  //Kein doppelter Index hintereinander
    let firstIndex;
  if (first.lenght === 1) {
    firstIndex = 0;
  } else {
    do {
      firstIndex = Math.floor(Math.random() * first.length);
    } while (firstIndex === lastFirstIndex);
  }
  lastFirstIndex = firstIndex;
  const f = first[firstIndex]?.name || '';

    let lastIndex;
  if (last.lenght === 1) {
    firstIndex = 0;
  } else {
    do {
      lastIndex = Math.floor(Math.random() * last.length);
    } while (lastIndex === lastLastIndex);
  }
  lastFirstIndex = firstIndex;
  const l = last[lastIndex]?.name || '';

  let flavorIndex;
  if (flavor.length === 1) {
    flavorIndex = 0;
  } else {
    do {
      flavorIndex = Math.floor(Math.random() * flavor.length);
    } while (flavorIndex === lastFlavorIndex);
  }
  lastFlavorIndex = flavorIndex;
  const fl = flavor[flavorIndex]?.name || '';

  document.getElementById('randomNameTavernResult').innerHTML = `The ${f} ${l}<br> ${fl}`;
}

window.addEventListener('DOMContentLoaded', fetchRandomNameTavern);