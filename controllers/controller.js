// Routes listen to elements on page

const express = require("express");
const router = express.Router();
const models = require("../models");

// Listening to a get request for index page.
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

// router.put("/api/update_burger/:id", function (req, res) {
//   const condition = "is_eaten = " + req.params.id;

//   console.log(condition);

//   models.burger_type.update({
//     is_eaten: req.body.is_eaten
//   }, condition, function (result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


// router.put("/api/create_burger/:id", function (req, res) {
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
