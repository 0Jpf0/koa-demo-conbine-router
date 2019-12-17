import combineRouters from 'koa-combine-routers'
import bRouter from './publicRouter'
import forgetRouter from './forgetRouter'

export default combineRouters(forgetRouter,bRouter)
