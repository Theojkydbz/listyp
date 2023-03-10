const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const cors = require('cors');

const session = require('express-session');
const passport = require('passport');

//const MongoDBStore = require('connect-mongodb-session')(session);

// const store = new MongoDBStore({
//   uri: config.DB_URI,
//   collection: 'feedbackerSessions'
// })

//store.on('error', (error) => console.log(error))

require("./models/users");

require("./services/passport")

const usersRoutes = require("./routes/users");

mongoose.connect(config.DB_URI, { useNewUrlParser: true })
  .then(() => console.log('DB Connected!'))
  .catch(err => console.log(err));

const app = express();


app.use(cors());

app.use(bodyParser.json());

// app.use(session({ secret: config.SESSION_SECRET, 
//                   cookie: {maxAge: 3600000},
//                   resave: false,
//                   saveUninitialized: false,
//                   store
//                   }))
// app.use(passport.initialize());
// app.use(passport.session())


app.use('/api/v1/users', usersRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT , function() {
  console.log('App is running on port: ' + PORT);
});