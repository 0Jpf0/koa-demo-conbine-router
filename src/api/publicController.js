import svgCaptcha from "svg-captcha";
import { setValue } from "../config/RedisConfig";
class publicController {
  constructor() {}
  async getCaptcha(ctx) {
    let body = ctx.request.query;
    let captcha = svgCaptcha.create({
      size: 4,
      color: true,
      noise: Math.floor(Math.random() * 5),
      width: 150,
      height: 38,
    });
    setValue(body.sid, captcha.text, 10 * 60);
    ctx.body = {
      code: 200,
      data: captcha.data,
    };
  }
}
export default new publicController();
