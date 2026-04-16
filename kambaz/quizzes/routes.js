import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const findQuizzesForCourse = async (req, res) => {
    try {
    const { courseId } = req.params;
    const quizzes = await dao.findQuizzesForCourse(courseId);
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch quizzes" });
  }
  };
  const createQuiz = async (req, res) => {
    try {
    const { courseId } = req.params;
    const newQuiz = await dao.createQuiz({ ...req.body, course: courseId });
    res.json(newQuiz);
  } catch (err) {
    res.status(500).json({ message: "Failed to create quiz" });
  }
  };
  const updateQuiz = async (req, res) => {
    try {
    const { quizId } = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    res.json(status);
  } catch (err) {
    res.status(500).json({ message: "Failed to update quiz" });
  }
  };
  const deleteQuiz = async (req, res) => {
    try {
    const { quizId } = req.params;
    const status = await dao.deleteQuiz(quizId);
    res.json(status);
  } catch (err) {
    res.status(500).json({ message: "Failed to delete quiz" });
  }

  };
  
  app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
  app.post("/api/courses/:courseId/quizzes", createQuiz);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
}