const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const { Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  // check wether the usre already exists or not
  //   Admin.findOne({
  //     username: username,
  //   }).then(() => {
  //     if (val) {
  //       res.status(411).json({
  //         msg: "user already exists",
  //       });
  //     }
  //   });
  await Admin.create({
    username: username,
    password: password,
  });
  res.json({
    msg: " user created succesfully",
  });
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
