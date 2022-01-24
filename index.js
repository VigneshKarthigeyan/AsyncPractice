const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("connected successfully"))
  .catch((error) => console.log(error));

const courseSchema = mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number,
  tags: [String],
  date: { type: Date, default: Date.now },
});

const Course = mongoose.model("courses", courseSchema);

async function getpublishedBackendCourses() {
  return await Course.find({ isPublished: true, tags: "backend" })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
}

async function publishedBackendCourses() {
  const courses = await getpublishedBackendCourses();
  console.log(courses);
}

// publishedBackendCourses()

async function getpublishedCourses() {
  return await Course.find({
    isPublished: true,
    tags: { $in: ["backend", "frontend"] },
  })
    .sort({ price: -1 })
    .select({ name: 1, author: 1 });
}

async function publishedCourses() {
  const courses = await getpublishedCourses();
  console.log(courses);
}

// publishedCourses()

async function getCoursesGte15() {
  return await Course.find({ isPublished: true })
    .or([{ price: { $gte: 15 } }, { name: /.*by.*/ }])
    .sort({ price: -1 })
    .select({ name: 1, author: 1, price: 1 });
}

async function CoursesGte15() {
  const courses = await getCoursesGte15();
  console.log(courses);
}

CoursesGte15();
