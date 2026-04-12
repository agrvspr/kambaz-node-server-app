import model from "./model.js";

export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}
export function createAssignment(assignment) {
  return model.create(assignment);
}
export function updateAssignment(assignmentId, updates) {
  return model.updateOne({ _id: assignmentId }, { $set: updates });
}
export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}