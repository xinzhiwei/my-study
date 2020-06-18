/*
 路由级的中间件
 中间件的挂在方式和执行流程
 1.use  2.路由方式：get  post  put  delete
*/
const express = require("express");
const app = express();
const post = 3000;

/*路由方式的中间件*/
// app.get("/abc",(req,res,next)=>{
//     console.log(1);
//     // next(); 传递到一级
//     // next("route") 跳转到下一个路由(即下一个通过app.get，或者其他形式的路由)
//     next('route');
// },(req,res)=>{
//     // 如果是next("route"),则这段代码不执行
//     console.log(2);
//     res.send("hahahaha");
// })

// app.get("/abc",(req,res)=>{
//     console.log(3);
//     res.send("hello world");
// })
// -------------------
var cb0 = (req,res,next)=>{
    console.log("CB0");
    next();
}
var cb1 = (req,res,next)=>{
    console.log("CB1");
    next();
}
var cb2 = (req,res)=>{
    res.send("hello world123");
}

app.get("/abc",[cb0,cb1,cb2]);

app.listen(post,()=>{
    console.log("running...");
})