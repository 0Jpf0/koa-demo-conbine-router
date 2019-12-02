const koaRouter=require('koa-router');
const a=require('../api/a');
const router=new koaRouter();
router.get('/a',a);
module.exports= router