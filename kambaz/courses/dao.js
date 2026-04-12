import model from "./model.js";

export function findAllCourses() {
  return model.find();
}
export function createCourse(course) {
  return model.create(course);
}
export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
}
export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}