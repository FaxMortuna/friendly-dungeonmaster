const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const db = new sqlite3.Database('db/namenmale.db');

app.use(bodyParser.json());
app.use(express.static('.')); // Statische Dateien (HTML, CSS, JS)

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS firstNames (name TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS lastNames (name TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS flavors (name TEXT)");
});

// Zufälligen Namen generieren
app.get('/api/randomname', (req, res) => {
  db.get("SELECT name FROM firstNames ORDER BY RANDOM() LIMIT 1", [], (err, first) => {
    db.get("SELECT name FROM lastNames ORDER BY RANDOM() LIMIT 1", [], (err, last) => {
      db.get("SELECT name FROM flavors ORDER BY RANDOM() LIMIT 1", [], (err, flavor) => {
        res.json({ name: `${first?.name || ''} ${last?.name || ''} ${flavor?.name || ''}` });
      });
    });
  });
});

// Neue Datenbank für weibliche Namen
const dbFemale = new sqlite3.Database('db/namenfemale.db');

dbFemale.serialize(() => {
  dbFemale.run("CREATE TABLE IF NOT EXISTS firstNames (name TEXT)");
  dbFemale.run("CREATE TABLE IF NOT EXISTS lastNames (name TEXT)");
  dbFemale.run("CREATE TABLE IF NOT EXISTS flavors (name TEXT)");
});

// Neue Route für weibliche Namen
app.get('/api/randomname_female', (req, res) => {
  dbFemale.get("SELECT name FROM firstNames ORDER BY RANDOM() LIMIT 1", [], (err, first) => {
    dbFemale.get("SELECT name FROM lastNames ORDER BY RANDOM() LIMIT 1", [], (err, last) => {
      dbFemale.get("SELECT name FROM flavors ORDER BY RANDOM() LIMIT 1", [], (err, flavor) => {
        res.json({ name: `${first?.name || ''} ${last?.name || ''} ${flavor?.name || ''}` });
      });
    });
  });
});

// Neue Datenbank für Random Loot Alley
const dbLoot = new sqlite3.Database('db/random_loot_alley.db');

dbLoot.serialize(() => {
  dbLoot.run(`CREATE TABLE IF NOT EXISTS 'random_loot_alley' ("loot_alley" TEXT)`);
});

// Route für zufälligen Loot-Eintrag
app.get('/api/randomloot', (req, res) => {
  dbLoot.get(
    `SELECT "loot_alley" as item FROM random_loot_alley ORDER BY RANDOM() LIMIT 1`,
    [],
    (err, row) => {
      if (err) {
        res.status(500).json({ error: 'Fehler beim Auslesen der Loot-Tabelle.' });
      } else {
        res.json({ item: row?.item || '' });
      }
    }
  );
});

app.listen(3000, () => console.log('Server läuft auf http://localhost:3000'));