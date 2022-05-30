const { PrismaClient } = require("@prisma/client");
const express = require("express");

const prisma = new PrismaClient();
function getUserRoutes() {
  const router = express.Router();
  router.get("/", getUserById);
  return router;
}

// all routes
async function getUserById(req, res) {
  try {
    const user = await prisma.user.findFirst();
    res.json(user);
  } catch (error) {
    res.json("error");
  }
}

module.exports = getUserRoutes;
