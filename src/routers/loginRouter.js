import koaRouter from "koa-router";
import loginController from "../api/loginController";

const router = new koaRouter();
router.prefix("/login");
router.post("/login", loginController.login);
router.post("/reg", loginController.reg);
export default router;
