const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');

require('./auth/googlePassport');
require('./models/user');

const middlewares = require('./middlewares');
const api = require('./api');
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DATABASE_URI, dbOptions);
mongoose.connection.on('connected', () => {
  console.log('DB is connected');
});

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
