const express = require("express");
const {
  addStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/")
  .post(protect, adminOnly, addStudent)
  .get(protect, getStudents);

router.route("/:id")
  .get(protect, getStudent)
  .put(protect, adminOnly, updateStudent)
  .delete(protect, adminOnly, deleteStudent);

module.exports = router;
