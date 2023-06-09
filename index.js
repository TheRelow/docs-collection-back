require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");
const { routes } = require("./src/routes");

// Подключение к БД
mongoose.connect(process.env.MONGO_URI_TEST, {
  useNewUrlParser: true,
});

// Инициализация приложения
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Объявление роутов
app.get("/", (req, res) => {
  res.end(`api working on route /api/v1/`);
});

app.get("/api/v1/", (req, res) => {
  res.end(`testpage`);
});

routes.forEach((item) => {
  app.use(`/api/v1/${item}`, require(`./src/routes/${item}`));
});

const PORT = process.env.PORT || 3100;
http.createServer({}, app).listen(PORT);
console.log(`Server running at ${PORT}`);
