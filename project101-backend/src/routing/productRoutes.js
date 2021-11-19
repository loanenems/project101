const data = require("../data.json");

// List of routes for products
function productRoutes(app) {
  app.get("/products", (req, res) => {
    res.json(data.products);
  });
}

module.exports = productRoutes;
