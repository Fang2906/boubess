// Importation des modules nécessaires : http, fs, generate-password, et nodemailer
const http = require('http');
const fs = require('fs');
const generatePassword = require('generate-password');
const nodemailer = require('nodemailer');

// Tâche 1 : Imprimer "HELLO WORLD" sur la console
console.log("HELLO WORLD");

// Tâche 2 : Créer un serveur qui répond par '<h1>Hello Node!!!!</h1>\n' sur le port 3000
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Tâche 3 : Créer un fichier 'welcome.txt', y écrire "Hello Node", puis lire et afficher le contenu

// Écrire dans le fichier 'welcome.txt'
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File created and data written.');

    // Lire et afficher le contenu de 'welcome.txt'
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});

// Tâche 4 : Générer un mot de passe aléatoire et l'afficher dans la console
function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 10,
        numbers: true
    });
    console.log(`Generated password: ${password}`);
}

generateRandomPassword();

// Tâche 5 : Envoyer un e-mail en utilisant nodemailer

// Remplacez par vos informations personnelles et utilisez le mot de passe d'application généré
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',       // Remplacez par votre email
        pass: 'your-application-password'   // Remplacez par votre mot de passe d'application
    }
});

const mailOptions = {
    from: 'your-email@gmail.com',           // Remplacez par votre email
    to: 'recipient-email@gmail.com',        // Remplacez par l'email du destinataire
    subject: 'Test Email from Node.js',
    text: 'Hello from Node.js!'
};

// Envoyer l'email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
