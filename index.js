const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Home</h1>
    <ul>
      <li><a href="/sobre-mim">Sobre Mim</a></li>
      <li><a href="/contato">Contato</a></li>
      <li><a href="/third">Terceiro</a></li>
    </ul>
  `);
});

app.get('/sobre-mim', (req, res) => {
  res.send('<h1>Sobre Mim</h1><p>Sou Carlos Henrique</p>');
});

app.get('/contato', (req, res) => {
  res.send('<h1>Contato</h1><p>4002-8922</p>');
});

app.get('/third', (req, res) => {
  res.send('<h1>third</h1><p>Terceiro link</p>');
});

app.listen(port, () => {
  console.log("Servidor rodando em http:localhost: "+ port);
});