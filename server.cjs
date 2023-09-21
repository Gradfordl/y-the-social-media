require("dotenv").config();
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

//connect to MongoDB (we connected to the db in database.cjs and here we are requiring the app to connect to db upon loading)
require("./config/database.cjs")

const app = express();

// Middleware
app.use(logger("dev"));
    //logs requests to server
app.use(express.json());
    //parse incoming JSON data

// app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'dist')));
// to serve from the production 'dist' folder. Makes dist folder a static asset to be able to give to browser for production

//Giving App checkToken middleware (sets req.user and req.exp properties on the request object)
app.use(require("./config/checkToken.cjs"))

// Put API routes here, before the "catch all" route
app.get('/test', (req, res) => {
    res.send('You just hit an API route');
  });

const userRouter = require("./routes/api/users.cjs")
//Router setup
//if request begins with /api/users, direct to user router
app.use("/api/users", userRouter)

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
  
  
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Express app running on port: ${PORT}`)
})