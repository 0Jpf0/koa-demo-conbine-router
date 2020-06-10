import jsonwentoken from "jsonwebtoken";
import config from "../config";
import { checkCode } from "../common/untils";
import User from "../model/User";
class loginController {
  constructor() {}

  async login(ctx) {
    let { body } = ctx.request;
    let sid = body.sid;
    let code = body.code;
    if (checkCode(sid, code)) {
      console.log("check ok");
      let checkUserPassword;
      let user = await User.findOne({
        username: body.username,
      });
      if (user.password === body.password) {
        checkUserPassword = true;
      } else {
        checkUserPassword = false;
      }
      if (checkUserPassword) {
        let token = jsonwentoken.sign(
          { _id: "pxm", exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24) },
          config.JWT_SECRET
        );
        ctx.body = {
          code: "404",
          msg: "用户名或密码错误",
        };
      } else {
        ctx.body = {
          code: 200,
          token: token,
        };
      }
    } else {
      ctx.body = {
        code: 401,
        token: "图形验证码不正确",
      };
    }
  }
}

export default new loginController();
