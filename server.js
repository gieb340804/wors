var express = require('express');

// создаём Express-приложение
var app = express();

// создаём маршрут для главной страницы
// http://localhost:8080/



app.get('/', function(req, res) {
  res.sendfile('api.html');
  
});

app.get('/index_vehicles.html', function(req, res) {
  res.sendfile('index_vehicles.html');
  
});

app.get('/css/style.css', function(req, res) {
  res.sendfile('style.css');
  
});

// запускаем сервер на порту 8080
app.listen(8080);
// отправляем сообщение
console.log('Сервер стартовал!');