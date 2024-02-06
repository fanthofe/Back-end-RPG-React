const express = require('express');
const router = require('./routers/main.router.js');

const app = express();

app.use(router);

// Afin de rendre disponib le un module à l'extérieur de celui-ci on doit fournir ce qui ser accéssible atravers l'objet "exports".
module.exports = app;