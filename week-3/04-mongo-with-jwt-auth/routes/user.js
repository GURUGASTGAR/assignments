const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const secret = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  await User.create({
    username: username,
    password: password,
  });
  res.json({
    msg: "succesfull signup",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.find({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign({ username }, secret);
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      msg: "user doesnot exist",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const allCourses = await Course.find({});
  res.json({
    courses: allCourses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  const courseId = req.params.courseId;
  const result = await User.updateOne(
    {
      username: username,
    },
    {
      $push: { purchasedCourse: courseId },
    }
  );
  res.json({
    msg: "course purchased succesfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.username;
  const data = await User.findOne({ username });
  console.log(data);
  const Cour = await Course.find({
    _id: data.purchasedCourse,
  });
  res.json({
    purchasedCourses: Cour,
  });
});

module.exports = router;
