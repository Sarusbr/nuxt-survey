const express = require("express")
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.listen(3000)
//Database quick.db
const db = require('./surveys.js')
 
app.post("/surveys", async (req,res)=>{

    const {title,description,questions} = req.body
    if(!title || !description)
        res.json({error:"Lütfen tüm alanları doldurunuz"})
    
   
    db.createSurvey(title,description,questions)
    res.json({test:"oluşturudu"})
})

app.get("/asd",async (req,res)=>{
       
    await db.set("surveys", 
    [
        {
            id:0,
            title:"Anket başlığı",
            description:"Anket açıklaması",
            questions:[
                {
                    type:"text",
                    question:"Kendini 5 yıl sonra nerede görüyorsun?",
                    placeholder:"Lütfen giriniz",
                    answers:[
                        "Çok ileride görüyorum",
                        "Çok ileride görüyorum",
                        "Çok ileride görüyorum",
                    ]
                },
                {
                    type:"radio",
                    question:"Kendini 5 yıl sonra nerede görüyorsun?",
                    options:[
                        {option:"Ankara'da" , count:0},
                        {option:"İstanbul'da" , count:0},
                        {option:"Turgutlu'da" , count:0}
                    ]
                }
            ]
        }
    ]);
    console.log(await db.get("surveys"))
  
    console.log("req geldi")
    res.end("asd deneme");
})

module.exports = {
    path:"/api",
    handler: app
}