const express=require("express");
const app=express();

app.get("/",(req,res)=>{
  res.send("hello world tes test test test");
});


app.listen(3001,()=>{
    console.log("running on port 3001");
});