const express = require('express');
const path = require('path');
const app = express();
const port = 3100;
const indexRouter = require('./routes/index');
const trainersRouter = require('./routes/trainers');
const contactsRouter = require('./routes/contacts');

// Настройка EJS в качестве шаблонизатора
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Подключение статических файлов
app.use(express.static(path.join(__dirname, 'app')));

app.use(express.urlencoded({ extended: true }));

// Подключение маршрутов
app.use('/', indexRouter);
app.use('/trainers', trainersRouter);
app.use('/contacts', contactsRouter);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});