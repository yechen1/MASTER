const koa = require("koa");
const Router = require("koa-router");

const app = new koa();

const router = new Router();


router.get("/",async(ctx)=>{
    ctx.body = '/'
})

router.get("/home",async(ctx)=>{
    ctx.body = 'home'
})

router.get("/world",async(ctx)=>{
    ctx.body = 'world'
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(10000,()=>{
    console.log("listen to 10000")
})