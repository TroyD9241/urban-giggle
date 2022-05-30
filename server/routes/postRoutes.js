const { PrismaClient } = require("@prisma/client");
const express = require("express");

const prisma = new PrismaClient();
function getPostRoutes() {
  const router = express.Router();
  router.get("/", allPosts);
  return router;
}

// all routes
async function allPosts(req, res) {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (error) {
    res.json("error");
  }
}

module.exports = getPostRoutes;
