const express = require("express");
const postsRoutes = require("./routes/postsRoutes.js");
const commentsRoutes = require("./routes/commentsRoutes.js");

const app = express();
app.use(express.json());

app.use("/api/posts", postsRoutes);
app.use("/api/posts/:id/comments", commentsRoutes);

app.listen(4000, () => console.log("listening on port 4000"));
