// const Koa=require('koa');
// const path=require('path')
import Koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routers/routers'
const app=new Koa();
// const helmet=require('koa-helmet');
// const statics=require('koa-static');
// const router=require('./routers/routers')
app.use(helmet());
app.use(statics(path.join(__dirname,'../public')));
app.use(router());
app.listen(3003)