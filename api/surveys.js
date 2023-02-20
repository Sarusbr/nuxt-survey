const { QuickDB } = require("quick.db");
const db = new QuickDB(); // will make a json.sqlite in the root folder

export function tet(){
    console.log("firstssssssssssssssssss")
}

console.log("first")

async function createSurvey (){
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
    ])
}