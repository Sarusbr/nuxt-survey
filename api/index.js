const express = require("express")
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//app.listen(3000) //will remove for publish. using for dev

//Database quick.db
const db = require('./surveys.js')
 
app.post("/surveys", async (req,res)=>{
    const {title,description,questions} = req.body
    if(!title || !description || !questions) return res.json({error:"Lütfen tüm alanları doldurunuz"})
   
    const result = await db.createSurvey(title,description,questions)
    res.json(result)
})

app.get("/surveys/:id",async (req,res)=>{
    if(!req.params.id) return res.json({error:"Lütfen id giriniz"})
    res.json(await db.getSurvey(req.params.id) ?? {error:"Anket bulunamadı"})
})

app.get("/surveys/",async (req,res)=>{
    res.json(await db.getSurvey())
})

app.patch("/surveys/:id", async (req,res)=>{
    if(!req.params.id) return res.json({error:"Lütfen id giriniz"})
   
    const result = await db.fillSurvey(req.params.id,req.body)
    res.json(result ?? {error:"Anket doldurulurken bir hata oluştu"})
})


module.exports = {
    path:"/api",
    handler: app
}