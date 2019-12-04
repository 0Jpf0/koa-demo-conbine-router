
import Koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routers/routers'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import koaCompose from 'koa-compose'
import koaCompress from 'koa-compress'
const app=new Koa();

// app.use(helmet());
// app.use(statics(path.join(__dirname,'../public')));
// app.use(router());
const isDevMode=process.env.NODE_ENV==='production'?false:true
/**集成调用中间件
 *
 * @type {compose.ComposedMiddleware<any>}
 */
const middleware=koaCompose([
    koaBody(),
    cors(),
    statics(path.join(__dirname,'../public')),
    jsonutil({pretty:false,param:'pretty'}),
    helmet(),
])
if(!isDevMode){
    app.use(koaCompress())
}
app.use(middleware)
app.use(router());
app.listen(3003)