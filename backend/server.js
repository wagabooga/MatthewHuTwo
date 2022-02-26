// ------------------------- require -------------------------
require("dotenv").config();
const express = require('express')
// ------------------------- Web server config -------------------------
const app = express()
const port = process.env.PORT || 8000


// ------------------------- db config -------------------------
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);

db.connect(() => {
  console.log("Connected to Database")
});


app.get('/', (req, res) => {
  res.send('Backend Root')
})

// ------------------------- routes -------------------------
// const homeRoutes = require("./routes (api)/home.js");
// app.use("/home", homeRoutes());

// const loginRoutes = require("./routes (api)/login.js");
// app.use("/login", loginRoutes(spotifyApiWrapper, db));

// const spotifyRoutes = require("./routes (api)/spotify.js");
// app.use("/spotify", spotifyRoutes(spotifyApiWrapper));

// const userRoutes = require("./routes (api)/users.js");
// app.use("/users", userRoutes(db));

// const reactRoutes = require("./frontendRoutes/react.js");
// app.use("/react", reactRoutes());

// const spotRoutes = require("./routes (api)/spots.js");
// app.use("/spots", spotRoutes(db));


// ------------------------- Start Server -------------------------
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})







// ------------------------- LOGIN -------------------------
// tinyapp/express_server.js