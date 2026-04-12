import ModulesDao from "../modules/dao.js";
export default function ModulesRoutes(app, db) {
    const dao = ModulesDao(db);
    const findModulesForCourse = (req, res) => {
        const { courseId } = req.params;
        const modules = dao.findModulesForCourse(courseId);
        res.json(modules);
    }
    const createModuleForCourse = async (req, res) => {
        const { courseId } = req.params;
        const module = {
            ...req.body,
        };
        const newModule = await dao.createModule(courseId, module);
        res.send(newModule);
    }
    const deleteModule = (req, res) => {
        const { moduleId } = req.params;
        const status = dao.deleteModule(moduleId);
        res.send(status);
    }
    const updateModule = async (req, res) => {
        const { courseId, moduleId } = req.params;
        const moduleUpdates = req.body;
        const status = await dao.updateModule(courseId, moduleId, moduleUpdates);
        res.send(status);
    }
    app.put("/api/courses/:courseId/modules/:moduleId", updateModule);
    app.delete("/api/modules/:moduleId", deleteModule);
    app.post("/api/courses/:courseId/modules", createModuleForCourse);
    app.get("/api/courses/:courseId/modules", findModulesForCourse);
}
