// Routes listen to elements on page
const express = require("express");
const router = express.Router();
const models = require("../models");

// Get request for index page.
router.get("/", function (req, res) {
   models.burger_type.findAll({ raw: true })
      .then((result) => {
         console.log(result)
         const hbsObject = {
            burger: result
         };
         res.render("index", hbsObject);
      });
});

// Post request for new burgers.
router.post("/api/create_burger", function (req, res) {
   models.burger_type.create(
      { burger_name: req.body.name },
      res.status(200).end()
   );
});

// Put request to update burger state to eaten.
router.put("/api/update_burger/:id", function (req, res) {
   const burgerId = req.params.id;

   console.log(burgerId);

   models.burger_type.update(
      { is_eaten: 1 },
      { where: { id: burgerId } },
      res.status(200).end()
   )
});

// Delete request for eaten burgers.
router.delete("/api/delete_burger/:id", function (req, res) {
   const condition = req.params.id;

   models.burger_type.destroy({
      where: { id: condition }
   },
      res.status(200).end());
});

// Export routes for server.js to use.
module.exports = router;
