const express = require("express");
const axios = require("axios");
const db = require("../data/db.js");

const router = express.Router();

// Routes go here:

// /api/posts GET Returns an array of all the post objects contained in the database.
router.get("/", (req, res) => {
  db.find()
    .then(comments => {
      res.status(200).json(comments);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The posts information could not be retrieved" });
    });
});

// /api/posts POST Creates a post using the information sent inside the request body.
router.post("/", (req, res) => {
  db.insert(req.body)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not add your post..." });
    });
});

// /api/posts/:id Returns the post object with the specified id.
router.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then(post => {
      if (post.length === 1) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ error: "Could not find post" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Could not get post" });
    });
});

// /api/posts/:id DELETE

router.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then(post => {
      if (post) {
        res.status(201).json(post);
      } else {
        res.status(404).json({ error: "Could not find post" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Could not get post" });
    });
});

// /api/posts/:id PUT
router.put("/:id", (req, res) => {
  let id = req.params.id;
  let post = req.body;

  db.update(id, post)
    .then(updatedPost => {
      if (updatedPost) {
        res.status(201).json(updatedPost);
      } else {
        res.status(404).json({ error: "id not found..." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Could not update post" });
    });
});

router.get("/:id/comments", (req, res) => {
  db.findPostComments(req.params.id)
    .then(c => {
      if (c.length > 0) {
        res.status(200).json(c);
      } else {
        res.status(404).json({ error: "post id not found" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Could not load comments" });
    });
});

router.post("/:id/comments", (req, res) => {
  db.insertComment(req.body)
    .then(c => {
      res.status(201).json(c);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not post comment" });
    });
});

module.exports = router;
