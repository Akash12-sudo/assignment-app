const express = require("express");
const router = express.Router();

const {
  HomePage,
  getAllUsers,
  removeUser,
  addUser,
} = require("../controllers/controllers.js");

router.get("/", HomePage);
router.get("/getAllUsers", getAllUsers);
router.post("/deleteUser", removeUser);
router.post("/addUser", addUser);

module.exports = router;
