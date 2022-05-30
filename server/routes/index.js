// Dependency Imports
const express = require("express");
const getCommentRoutes = require("./commentRoutes");

// Any route imports go here
const getPostRoutes = require("./postRoutes");
const getUserRoutes = require("./userRoutes");

function getRoutes() {
  // Create a router
  const router = express.Router();
  // Assign routes
  router.use("/posts", getPostRoutes());
  router.use("/users", getUserRoutes());
  router.use("/comments", getCommentRoutes());

  return router;
}

module.exports = getRoutes;
