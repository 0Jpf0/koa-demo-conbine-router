import svgCaptcha from 'svg-captcha';
class publicController{
    constructor(){}
    async getCaptcha(ctx){
        let captcha=svgCaptcha.create({
            size: 4,
            color:true,
            noise:Math.floor(Math.random()*5),
            width:150,
            height:38,
        });
        ctx.body={
            code:200,
            data:captcha.data
        }

    }
}
export default new publicController()
