const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

// Parses incoming requests body to json
app.use(express.json(), cors());

// This middleware simulate delay
// app.use((req, res, next) => {
//   setTimeout(() => {
//     next();
//   }, 3000);
// });

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Routes
require("./routing/productRoutes")(app);

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});
