async function fetchRandomCharacter() {
    const name1 = document.getElementById('characterName1').value.trim();
    const name2 = document.getElementById('characterName2').value.trim();
    const resultDiv = document.getElementById('randomCharacterResult');

    // Lade alle JSON-Dateien parallel aus dem richtigen Ordner
    const [personality, ideals, bond, flaw, fear] = await Promise.all([
        fetch('json/character_creator/personality.json').then(r => r.json()),
        fetch('json/character_creator/ideals.json').then(r => r.json()),
        fetch('json/character_creator/bond.json').then(r => r.json()),
        fetch('json/character_creator/flaw.json').then(r => r.json()),
        fetch('json/character_creator/fear.json').then(r => r.json())
    ]);

    // Drei unterschiedliche Personality-Einträge ziehen
    function getNUniqueRandom(arr, n) {
        const indices = [];
        while (indices.length < n && indices.length < arr.length) {
            const idx = Math.floor(Math.random() * arr.length);
            if (!indices.includes(idx)) indices.push(idx);
        }
        return indices.map(i => arr[i].value);
    }
    const [personalityText1, personalityText2, personalityText3] = getNUniqueRandom(personality, 3);

    const getRandom = arr => arr[Math.floor(Math.random() * arr.length)].value;
    const idealsText = getRandom(ideals);
    const bondText = getRandom(bond);
    const flawText = getRandom(flaw);
    const fearText = getRandom(fear);

    resultDiv.innerHTML = `
    <div class="character-name"><strong>My name is <span class="highlight-name">${name1} ${name2}</span></strong></div>
    <table class="character-table">
      <tr><td><b>Personality 1:</b></td><td>${personalityText1}</td></tr>
      <tr><td><b>Personality 2:</b></td><td>${personalityText2}</td></tr>
      <tr><td><b>Personality 3:</b></td><td>${personalityText3}</td></tr>
      <tr><td><b>Ideal:</b></td><td>${idealsText}</td></tr>
      <tr><td><b>Bond:</b></td><td>${bondText}</td></tr>
      <tr><td><b>Flaw:</b></td><td>${flawText}</td></tr>
      <tr><td><b>Fear:</b></td><td>${fearText}</td></tr>
    </table>
    `;
};