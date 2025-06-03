function showRandom(btn) {
    const result = Math.floor(Math.random() * 6 + 1); // Math.floor rounds down, Math.random generates a random number between 0 and 1
    btn.textContent = result

}