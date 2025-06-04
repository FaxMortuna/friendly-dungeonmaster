const diceHistory = [];

function updateDiceHistory(result) {
    diceHistory.push(result);
    if (diceHistory.length > 10) diceHistory.shift();

    const historyDiv = document.getElementById('diceHistory');
    historyDiv.innerHTML = '';

    // Neueste zuerst, dann auffüllen auf 10 Felder
    const padded = [ ...diceHistory ].reverse().concat(Array(10 - diceHistory.length).fill(''));


    // Immer 10 Felder anzeigen, auch wenn leer
    for (let i = 0; i < 10; i++) {
        const cell = document.createElement('div');
        cell.className = 'dice-history-cell';
        cell.textContent = padded[i];
        // Das oberste linke Feld bekommt die Klasse 'flash'
        if (i === 0 && result !== '') {
            cell.classList.add('flash');
        }
        historyDiv.appendChild(cell);
    }
}

updateDiceHistory('');

function showRandomD6(btn) {
    const result = Math.floor(Math.random() * 6 + 1); // Math.floor rounds down, Math.random generates a random number between 0 and 1
    updateDiceHistory(result);
}

function showRandomD4(btn) {
    const result = Math.floor(Math.random() * 4 + 1); // Math.floor rounds down, Math.random generates a random number between 0 and 1
    updateDiceHistory(result);
}

function showRandomD8(btn) {
    const result = Math.floor(Math.random() * 8 + 1);
    updateDiceHistory(result);
}

function showRandomD10(btn) {
    const result = Math.floor(Math.random() * 10 + 1);
    updateDiceHistory(result);
}

function showRandomD12(btn) {
    const result = Math.floor(Math.random() * 12 + 1);
    updateDiceHistory(result);
}

function showRandomD20(btn) {
    const result = Math.floor(Math.random() * 20 + 1);
    updateDiceHistory(result);
}

function showRandomD100(btn) {
    const result = Math.floor(Math.random() * 100 + 1);
    updateDiceHistory(result);
}