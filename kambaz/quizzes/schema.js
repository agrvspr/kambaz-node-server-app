import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  title: String,
  description: String,

  assignmentGroup: {
    type: String,
    default: "Quizzes",
    enum: ["Quizzes", "Exams", "Assignments", "Projects"],
  },

  points: Number,
  shuffle: Boolean,
  time: Number,
  multipleAttempts: Boolean,

  howManyAttempts: {
    type: Number,
    default: 1,
  },

  showCorrect: {
    type: String,
    default: "Immediately",
    enum: ["Immediately", "After Quiz", "After Due Date", "Never"],
  },

  password: {
    type: String,
    default: "",
  },

  oneByOne: Boolean,
  webcam: Boolean,
  lockQuestions: Boolean,

  dueDate: Date,
  availableFrom: Date,
  availableUntil: Date,
}, { collection: "quizzes" });

export default quizSchema;