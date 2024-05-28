const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware pour vérifier l'heure de la demande
app.use((req, res, next) => {
    const currentHour = new Date().getHours();
    console.log(`Request received at ${currentHour}h`);
    next();
});

// Définir le répertoire public pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes pour les pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'services.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});

app.use((req, res, next) => {
    const currentHour = new Date().getHours();
    console.log(`Request received at ${currentHour}h`);
    next();
});
