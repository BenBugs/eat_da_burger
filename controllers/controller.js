// Routes listen to elements on page

const express = require("express");
const router = express.Router();
const models = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  models.burger_type.findAll({raw: true})
  .then((result) => {
    console.log(result)
    const hbsObject = {
      burger: result
    };

    res.render("index", hbsObject);
  });
});

// Listening to a post request.
router.post("/api/create_burger", function (req, res) {
  console.log(req.body)
  models.burger_type.create({
    burger_name: req.body.name
  })
});
  


// // Listening to a post request.
// router.post("/api/create_burger", function (req, res) {
//   models.burger_type.create({
//     burger_name: req.body.name
//   })
//   console.log(req.body.name)  // Request body is an object.
//   res.send('Hello world') // Response is a string.
// });



// router.put("/api/cats/:id", function (req, res) {
//   const condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function (result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/cats/:id", function (req, res) {
//   const condition = "id = " + req.params.id;

//   cat.delete(condition, function (result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
