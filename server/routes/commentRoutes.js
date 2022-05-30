const { PrismaClient } = require("@prisma/client");
const express = require("express");

const prisma = new PrismaClient();
function getCommentRoutes() {
  const router = express.Router();
  router.get("/", getCommentsByPostId);
  return router;
}

// all routes
async function getCommentsByPostId(req, res) {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        postId: 1,
      },
    });
    res.json(comments);
  } catch (error) {
    res.json("error");
  }
}

module.exports = getCommentRoutes;
