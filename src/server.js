const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const routes = require('./routes/routes');

const app = express();

// parse application/x-www-form-urlenconded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/* Use Routes
    - user
    - profile
*/
app.use('/api/user', routes.user);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));