import jsonwentoken from "jsonwebtoken";
import config from "../config";
import { checkCode } from "../common/untils";
import User from "../model/User";
import moment from "moment";
import bcrypt from "bcrypt";
class loginController {
  constructor() {}

  async login(ctx) {
    let { body } = ctx.request;
    let sid = body.sid;
    let code = body.code;
    if (await checkCode(sid, code)) {
      let checkUserPassword;
      let user = await User.findOne({
        username: body.username,
      });
      if (user != null) {
        if (await bcrypt.compare(body.password, user.password)) {
          checkUserPassword = true;
        } else {
          checkUserPassword = false;
        }
        if (!checkUserPassword) {
          ctx.body = {
            code: 500,
            msg: "用户名或密码错误",
          };
        } else {
          let token = jsonwentoken.sign(
            { _id: "pxm", exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24) },
            config.JWT_SECRET
          );
          ctx.body = {
            code: 200,
            token: token,
          };
        }
      } else {
        ctx.body = {
          code: 500,
          msg: "该用户不存在",
        };
      }
    } else {
      ctx.body = {
        code: 401,
        msg: "图形验证码不正确",
      };
    }
  }
  async reg(ctx) {
    let { body } = ctx.request;
    let sid = body.sid;
    let code = body.code;
    let msg = {};
    if (await checkCode(sid, code)) {
      let checkResult = true;
      let user = await User.findOne({
        username: body.username,
      });
      let user1 = await User.findOne({
        name: body.name,
      });
      if (user != null && user != "undefined") {
        if (user.username === body.username) {
          msg.username = ["该用户名已注册，可通过电子邮件找回密码"];
          checkResult = false;
        }
      }
      if (user1 != null && user1 != "undefined") {
        if (user1.name === body.name) {
          msg.username = ["该昵称已存在，请重新输入"];
          checkResult = false;
        }
      }
      if (checkResult) {
        body.password = await bcrypt.hash(body.password, 5);
        let newuser = new User({
          username: body.username,
          name: body.name,
          password: body.password,
          created: moment().format("YYYY-MM-DD HH:mm:ss"),
        });
        let result = newuser.save();
        ctx.body = {
          code: 200,
          data: result,
          msg: "注册成功",
        };
        return;
      }
    } else {
      msg.code = ["图形验证码已失效，请重新输入"];
    }
    ctx.body = {
      code: 500,
      msg: msg,
    };
  }
}

export default new loginController();
