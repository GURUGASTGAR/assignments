const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const secret = require("../config");
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  await Admin.create({
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
  const user = await Admin.find({
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

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const discription = req.body.discription;
  const imagelink = req.body.imagelink;
  const price = req.body.price;
  const newCourse = await Course.create({
    title: title,
    discription: discription,
    imagelink: imagelink,
    price: price,
  });
  console.log(newCourse);
  res.json({
    msg: "course created succesfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const allCourses = await Course.find({});
  res.json({
    courses: allCourses,
  });
});

module.exports = router;
