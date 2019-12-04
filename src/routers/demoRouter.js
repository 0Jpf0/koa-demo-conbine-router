import koaRouter from 'koa-router';
import demoController from '../api/demoController';
const router=new koaRouter();
router.get('/demo',demoController.demo);
export default router