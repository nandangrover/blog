const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");
const users = require("./routes/api/users");
const path = require('path');
const CMS = require("./routes/api/CMS");
const app = express();

// Grid.mongo = mongoose.mongo;

app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
// var db = mongoose.connection.db;
// var mongoDriver = mongoose.mongo;

mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => { 
    // var gfs = new Grid(db, mongoDriver);
    // module.exports = gfs;
    // console.log(gfs);
    
    // app.set('gridfs', gfs);
    console.log('MongoDb connected ...')}
    )
  .catch(err => console.log(err));

// app.use('/api/blog', items)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
//User validation
app.use("/api/users", users);
//CMS
app.use("/api/CMS", CMS);

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));