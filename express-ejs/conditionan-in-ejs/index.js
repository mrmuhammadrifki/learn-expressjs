const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/t/:tag', (req, res) => {
  const { tag } = req.params;
  res.render('tag', { tag });
});

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 20) + 1;
  res.render('random', { num });
});

app.listen(8001, () => {
  console.log(`listening on host http://localhost:8001`);
});
