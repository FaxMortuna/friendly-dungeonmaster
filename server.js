const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const db = new sqlite3.Database('namenmale.db');

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

// Namen hinzufügen (nur mit Passwort)
const ADMIN_PASSWORD = '123456789'; // <-- Ändere das!
app.post('/api/addname', (req, res) => {
  if (req.body.password !== ADMIN_PASSWORD) return res.status(403).send('Forbidden');
  if (req.body.first) db.run("INSERT INTO firstNames (name) VALUES (?)", [req.body.first]);
  if (req.body.last) db.run("INSERT INTO lastNames (name) VALUES (?)", [req.body.last]);
  if (req.body.flavor) db.run("INSERT INTO flavors (name) VALUES (?)", [req.body.flavor]);
  res.send('OK');
});

app.listen(3000, () => console.log('Server läuft auf http://localhost:3000'));