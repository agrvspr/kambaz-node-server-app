import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,

  assignmentGroup: {
    type: String,
    default: "Quizzes",
    enum: ["Quizzes", "Exams", "Assignments", "Projects"],
  },

  quizType: {
    type: String,
    default: "Graded Quiz",
    enum: ["Graded Quiz", "Ungraded Quiz", "Practice Quiz", "Ungraded Survey"],
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

  published: {
  type: Boolean,
  default: false,
},

  oneByOne: Boolean,
  webcam: Boolean,
  lockQuestions: Boolean,

  dueDate: Date,
  availableFrom: Date,
  availableUntil: Date,
}, { collection: "quizzes" });

export default quizSchema;