import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  const findEnrollmentsForUser = async (req, res) => {
    const { userId } = req.params;
    const enrollments = await dao.findCoursesForUser(userId);
    res.json(enrollments);
  };
  app.get("/api/users/:userId/enrollments", findEnrollmentsForUser);
}