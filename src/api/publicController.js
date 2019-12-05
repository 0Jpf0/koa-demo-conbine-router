import svgCaptcha from 'svg-captcha';
class publicController{
    constructor(){}
    async getCaptcha(ctx){
        let captcha=svgCaptcha.create();
        ctx.body={
            code:200,
            data:captcha.data
        }

    }
}
export default new publicController()
