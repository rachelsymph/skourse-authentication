const express = require('express');
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const passport = require('passport');
require('./auth');

const app = express();
const port = process.env.PORT || 8000;
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const store = new MongoDBSession({
  uri: process.env.DATABASE_URI,
  collection: 'sessions',
});

function isLoggedIn(req, res, next) {
  if (req.session.isAuth) {
    next(res.redirect('/login'));
  }
  req.user ? next() : res.sendStatus(401);
}

app.use(
  session({
    secret: 'ILOVECATS',
    resave: false,
    saveUninitialized: true,
    store,
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DATABASE_URI, dbOptions);
mongoose.connection.on('connected', () => {
  console.log('connected to DB');
});
app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure',
  })
);

app.get('/protected', isLoggedIn, (req, res) => {
  req.session.isAuth = true;
  res.send(`Hello ${req.user.displayName}`);
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
});

app.get('/auth/google/failure', (req, res) => {
  res.send('Fail to authenticate..');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
