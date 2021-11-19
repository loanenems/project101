const express = require("express");
const app = express();
const port = 3001;

// Parses incoming requests body to json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Routes
require("./routing/productRoutes")(app);

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});
