const express = require('express');
const path = require('path');
const app = express();
const port = 3100;
const indexRouter = require('./routes/index');

// Настройка EJS в качестве шаблонизатора
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Подключение статических файлов
app.use(express.static(path.join(__dirname, 'app')));

app.use(express.urlencoded({ extended: true }));

// Подключение маршрутов
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});