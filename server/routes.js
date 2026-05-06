const Router = require("express").Router;
const authMiddleware = require("./middleware/api-middleware")

const router = new Router();

const documentController = require("./controllers/DocumentController");
const UserController = require("./controllers/UserController");



router.post("/login", UserController.login);
router.post("/registration", UserController.registration);

router.get("/get_statements", authMiddleware, documentController.getList);
router.get("/user", UserController.getUser);
router.post("/logout", UserController.logout);
router.get("/refresh", UserController.refresh);

module.exports = router;
