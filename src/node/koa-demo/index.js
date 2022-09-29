const Koa = require("koa");
const app = new Koa();

app.proxy = true;
app.keys=['signedKey'] //推荐随机字符串

async function errorLogger(ctx,next){
    try{
        console.log("中间件2")
        ctx.cookies.set("logged",1,{
        signed:true,
        httpOnly:true,
        maxAge:3600*1000*24
         })
        //ctx.body="hello world1"
        await next();
    } catch(e){
        console.log("errorLogger")
    }
}
app.use(errorLogger);

app.use(async(ctx,next)=>{
    const logged = ctx.cookies.get('logged',{signed:true});
    console.log("logged",logged)
    ctx.body=logged
    await next();
})
app.use(async(ctx,next)=>{
    console.log("end")
})
app.listen(10000,()=>{
    console.log("listen on 10000")
})