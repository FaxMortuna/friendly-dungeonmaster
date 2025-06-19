const diceHistory = [];

function updateDiceHistory(result) {
  const el = document.getElementById('diceLastResult');
  if (el) {
    el.textContent = result;
  }
}

// Clear Log und History
function clearLog() {
    // Leert das Log
    const log = document.getElementById('diceLogEntries');
    if (log) log.innerHTML = '';
    // Leert das letzte Ergebnis
    updateDiceHistory('');
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

function clearHistory() {
    diceHistory.length = 0; // Clear the history array
    updateDiceHistory(''); // Update the display to show empty history
}

// Log-Eintrag hinzufügen
function addDiceLogEntry(diceType, result, customText) {
  const now = new Date();
  const timestamp = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
  const entry = document.createElement('div');
  entry.className = 'dice-log-entry';
  const text = customText ? customText : `<b>${diceType}</b>: You rolled a ${result}`;
  entry.innerHTML = `<span>${text}</span><span class="dice-log-timestamp">${timestamp}</span>`;
  const log = document.getElementById('diceLogEntries');
  if (log.firstChild) {
    log.insertBefore(entry, log.firstChild);
  } else {
    log.appendChild(entry);
  }
}

document.addEventListener('DOMContentLoaded', function() {
    updateDiceHistory('');
});