import send from '../config/mailConfig';
import moment from 'moment'

class forgetController {
    constructor() {
    }

    async forget(ctx) {
        let {body} = ctx.request;
        try {
            let result = await send({
                code: 1234,
                username: body.username,
                expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
                email: '897586577@qq.com'
            })
            console.log(result)
            ctx.body = {
                code: 200,
                data: result,
                msg: '发送邮件成功'
            }
        } catch (e) {
            console.log(e)
        }

    }
}

export default new forgetController()
