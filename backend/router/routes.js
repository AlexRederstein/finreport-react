const userController = require("../controller/user-controller");

const Router = require("express").Router;

const router = new Router();

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", userController.users);
router.get("/test", userController.test);

module.exports = router;
