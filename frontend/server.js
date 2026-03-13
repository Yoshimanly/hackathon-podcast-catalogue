// server.js
const express = require('express');
const app = express();

// Porta definida pela variável de ambiente ou 3000 por defeito
const PORT = process.env.PORT || 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Olá! O site está a correr no Docker.');
});

// Arranca o servidor
app.listen(PORT, () => {
  console.log(`Servidor Node a correr na porta ${PORT}`);
});