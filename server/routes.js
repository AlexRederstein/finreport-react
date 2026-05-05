const Router = require("express").Router;

const router = new Router();

const documentController = require("./controllers/DocumentController");
const userController = require("./controllers/UserController");

router.get("/user", userController.getUser);

router.get("/get_statements", documentController.getList);

router.post("/login", userController.login);

module.exports = router;
