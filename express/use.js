/*应用级的中间件 use*/

const express = require("express");
const app = express();
let total =0;

/*next()会把请求传递到下一个节点*/
app.use("/abc",(req,res,next)=>{
    // 记录访问时间
    console.log(Date.now());
    next();
})
app.use("/abc",(req,res,next)=>{
    // 记录访问日志
    console.log("访问了/abc");
    next();
})
app.use("/abc",(req,res)=>{
    // 网址访问量
   total++;
   console.log("当前访问人数"+total);
   res.send("result");
})

app.listen(3000,()=>{
    console.log("running...");
})