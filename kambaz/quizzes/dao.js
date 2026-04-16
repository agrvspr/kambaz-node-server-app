import model from "./model.js";

export function findQuizzesForCourse(courseId) {
  return model.find({ course: courseId });
}

export function createQuiz(quiz) {
  return model.create(quiz);
}

export function updateQuiz(quizId, updates) {
  return model.updateOne({ _id: quizId }, { $set: updates });
}

export function deleteQuiz(quizId) {
  return model.deleteOne({ _id: quizId });
}