import combineRouters from 'koa-combine-routers'
import bRouter from './publicRouter'

export default combineRouters(bRouter)
