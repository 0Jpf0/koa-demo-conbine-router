class demoController{
    constructor(){}
    async demo(ctx){
        ctx.body={
            msg:'message'
        }

    }
}
export default new demoController()