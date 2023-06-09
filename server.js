const express = require('express');
const session = require('express-session');
const routes = require('./controllers'); // Import API routes
const exphbs = require('express-handlebars'); // Import Handlebars
const helpers = require('./utils/helpers'); //import utils/helpers functions
const path = require('path');

const sequelize = require('./config/connection'); 
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });
// Set up sessions with Sequelize
const sess = {
    secret: process.env.SESS_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess));



// Set up Handlebars.js engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
// Add routes, both API and home
app.use(routes);

// Start server after DB connection
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  });