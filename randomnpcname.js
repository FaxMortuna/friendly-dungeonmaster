let lastLastName = null;
let lastFlavor = null;

async function fetchRandomNameNPC() {
  const [prefix, syllable1, syllable2, suffix, lastNames, flavors] = await Promise.all([
    fetch('json/random_npc_name/prefix.json').then(r => r.json()),
    fetch('json/random_npc_name/syllable1.json').then(r => r.json()),
    fetch('json/random_npc_name/syllable2.json').then(r => r.json()),
    fetch('json/random_npc_name/suffix.json').then(r => r.json()),
    fetch('json/randomname/lastNames.json').then(r => r.json()),
    fetch('json/randomname/flavors.json').then(r => r.json())
  ]);

  const getRandom = arr => arr[Math.floor(Math.random() * arr.length)].name;

  // Zufällig eine der drei Namensstrukturen wählen
  const pattern = Math.floor(Math.random() * 3);
  let name = "";

  if (pattern === 0) {
    name = getRandom(prefix) + getRandom(syllable1) + getRandom(syllable2) + getRandom(suffix);
  } else if (pattern === 1) {
    name = getRandom(prefix) + getRandom(syllable1) + getRandom(suffix);
  } else {
    name = getRandom(prefix) + getRandom(syllable2) + getRandom(suffix);
  }

  // lastName wählen, der nicht gleich dem letzten ist
  let lastname;
  do {
    lastname = getRandom(lastNames);
  } while (lastNames.length > 1 && lastname === lastLastName);
  lastLastName = lastname;

  // flavor wählen, der nicht gleich dem letzten ist
  let flavor;
  do {
    flavor = getRandom(flavors);
  } while (flavors.length > 1 && flavor === lastFlavor);
  lastFlavor = flavor;

  // Ergebnis zusammensetzen und anzeigen
  const resultDiv = document.getElementById('randomNameNPCResult');
  if (resultDiv) {
    resultDiv.innerHTML = `<strong>${name} ${lastname}</strong><br><span class="npc-flavor">${flavor}</span>`;
  }
}

window.addEventListener('DOMContentLoaded', fetchRandomNameNPC);
window.fetchRandomNameNPC = fetchRandomNameNPC;