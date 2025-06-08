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

function showRandomD6(btn) {
    const result = Math.floor(Math.random() * 6 + 1); // Math.floor rounds down, Math.random generates a random number between 0 and 1
    updateDiceHistory(result);
    addDiceLogEntry('D6', result);
}

function showRandomD4(btn) {
    const result = Math.floor(Math.random() * 4 + 1); // Math.floor rounds down, Math.random generates a random number between 0 and 1
    updateDiceHistory(result);
    addDiceLogEntry('D4', result);
}

function showRandomD8(btn) {
    const result = Math.floor(Math.random() * 8 + 1);
    updateDiceHistory(result);
    addDiceLogEntry('D8', result);
}

function showRandomD10(btn) {
    const result = Math.floor(Math.random() * 10 + 1);
    updateDiceHistory(result);
    addDiceLogEntry('D10', result);
}

function showRandomD12(btn) {
    const result = Math.floor(Math.random() * 12 + 1);
    updateDiceHistory(result);
    addDiceLogEntry('D12', result);
}

function showRandomD20(btn) {
    const result = Math.floor(Math.random() * 20 + 1);
    updateDiceHistory(result);
    addDiceLogEntry('D20', result);
}

function showRandomD100(btn) {
    const result = Math.floor(Math.random() * 100 + 1);
    updateDiceHistory(result);
    addDiceLogEntry('D100', result);
}

function clearHistory() {
    diceHistory.length = 0; // Clear the history array
    updateDiceHistory(''); // Update the display to show empty history
}

// Log-Eintrag hinzufügen
function addDiceLogEntry(diceType, result) {
  const now = new Date();
  const timestamp = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
  const entry = document.createElement('div');
  entry.className = 'dice-log-entry';
  entry.innerHTML = `<span><b>${diceType}</b>: ${result}</span><span class="dice-log-timestamp">${timestamp}</span>`;
  document.getElementById('diceLogEntries').prepend(entry);
}

function toggleDiceLog() {
  document.getElementById('dice-log-sidebar').classList.toggle('collapsed');
}

document.addEventListener('DOMContentLoaded', function() {
    updateDiceHistory('');
});