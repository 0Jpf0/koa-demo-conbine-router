import combineRouters from "koa-combine-routers";
import bRouter from "./publicRouter";
import forgetRouter from "./forgetRouter";
import loginRouter from "./loginRouter";

export default combineRouters(forgetRouter, bRouter, loginRouter);
