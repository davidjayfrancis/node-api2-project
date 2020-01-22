const express = require("express");
const db = require("../data/db.js");

const router = express.Router();

// routes go here (/api/posts:id/comments)

// /api/posts:id/comments GET -- Returns an array of all the comment objects associated with the post with the specified id.
// router.get("/", (req, res) => {
//   res.send(req.body);
//     db.findPostComments(req.params.id)
//       .then(c => {
//         res.status(200).json(c);
//       })
//       .catch(err => {
//         res.status(500).json({ error: "Could not load comments" });
//       });
// });

// /api/posts:id/comments POST  -- Creates a comment for the post with the specified id using information sent inside of the request body.

module.exports = router;
