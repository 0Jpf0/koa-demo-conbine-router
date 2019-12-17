import koaRouter from 'koa-router';
import forgetController from '../api/forgetController';

const router = new koaRouter();
router.post('/forget', forgetController.forget);
export default router
