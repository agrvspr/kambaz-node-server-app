import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao(db) {
  const findAllEnrollments = () => db.enrollments;
  const enrollUserInCourse = (userId, courseId) => {
    const enrollment = { _id: uuidv4(), user: userId, course: courseId };
    db.enrollments.push(enrollment);
    return enrollment;
  };
  const unenrollUserFromCourse = (userId, courseId) => {
    db.enrollments = db.enrollments.filter(
      (e) => !(e.user === userId && e.course === courseId)
    );
  };
  return { findAllEnrollments, enrollUserInCourse, unenrollUserFromCourse };
}