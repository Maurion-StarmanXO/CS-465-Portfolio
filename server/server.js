const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

require('./app_server/models/db');

// view engine setup (Handlebars + layouts + partials)
app.engine('hbs', exphbs.engine({
  extname: '.hbs',
  defaultLayout: 'layout',
  layoutsDir: path.join(__dirname, 'app_server', 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'app_server', 'views', 'partials')
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// routes
const routes = require('./app_server/routes/index');
app.use('/', routes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
