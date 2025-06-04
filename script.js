function showRandomD6(btn) {
    const result = Math.floor(Math.random() * 6 + 1); // Math.floor rounds down, Math.random generates a random number between 0 and 1
    btn.textContent = result
}

function showRandomD4(btn) {
    const result = Math.floor(Math.random() * 4 + 1); // Math.floor rounds down, Math.random generates a random number between 0 and 1
    btn.textContent = result
}

function showRandomD8(btn) {
    const result = Math.floor(Math.random() * 8 + 1);
    btn.textContent = result;
}

function showRandomD10(btn) {
    const result = Math.floor(Math.random() * 10 + 1);
    btn.textContent = result;
}

function showRandomD12(btn) {
    const result = Math.floor(Math.random() * 12 + 1);
    btn.textContent = result;
}

function showRandomD20(btn) {
    const result = Math.floor(Math.random() * 20 + 1);
    btn.textContent = result;
}

function showRandomD100(btn) {
    const result = Math.floor(Math.random() * 100 + 1);
    btn.textContent = result;
}