const express = require("express")
const app = express();

app.get("/asd",(req,res)=>{
    console.log("req geldi")
    res.end("asd deneme");
})

module.exports = {
    path:"/api",
    handler: app
}