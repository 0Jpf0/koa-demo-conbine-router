import koaRouter from "koa-router";
import publicController from "../api/publicController";
const router = new koaRouter();
router.prefix("/public");
router.get("/getCaptcha", publicController.getCaptcha);
export default router;
