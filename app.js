const express = require('express');
const path = require('path');
const app = express();
const port = 3100;

// Настройка EJS в качестве шаблонизатора
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Подключение статических файлов
app.use(express.static(path.join(__dirname, 'app')));

// Подключение маршрутов
const indexRouter = require('./routes/index');
app.use('/index', indexRouter);

// Рендер главной страницы с самого начала
app.get('/', (req, res) => {
    res.redirect('/index');
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});