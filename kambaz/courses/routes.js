import { v4 as uuidv4 } from "uuid";
import CoursesDao from "./dao.js";
import EnrollmentsDao from "../enrollments/dao.js";
export default function CourseRoutes(app, db) {
    const dao = CoursesDao(db);
    const enrollmentsDao = EnrollmentsDao(db);
    const createCourse = (req, res) => {
        const currentUser = req.session["currentUser"];
        const newCourse = dao.createCourse(req.body);
        db.enrollments.push({ _id: uuidv4(), user: currentUser._id, course: newCourse._id });
        res.json(newCourse);
    };
    app.post("/api/users/current/courses", createCourse);
    const findAllCourses = (req, res) => {
        const courses = dao.findAllCourses();
        res.send(courses);
    }
    const findCoursesForEnrolledUser = (req, res) => {
        let { userId } = req.params;
        if (userId === "current") {
            const currentUser = req.session["currentUser"];
            if (!currentUser) {
                res.sendStatus(401);
                return;
            }
            userId = currentUser._id;
        }
        const courses = dao.findCoursesForEnrolledUser(userId);
        res.json(courses);
    };
    const deleteCourse = (req, res) => {
        const { courseId } = req.params;
        const status = dao.deleteCourse(courseId);
        res.send(status);
    }
    const updateCourse = (req, res) => {
        const { courseId } = req.params;
        const courseUpdates = req.body;
        const status = dao.updateCourse(courseId, courseUpdates);
        res.send(status);
    }
    const findModulesForCourse = (req, res) => {
        const { courseId } = req.params;
        const modules = db.modules.filter((m) => m.course === courseId);
        res.json(modules);
    };

    app.get("/api/courses/:courseId/modules", findModulesForCourse);
    app.put("/api/courses/:courseId", updateCourse);
    app.delete("/api/courses/:courseId", deleteCourse);
    app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);
    app.get("/api/courses", findAllCourses);
}
