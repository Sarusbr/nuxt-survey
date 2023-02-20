const { QuickDB } = require("quick.db");
const db = new QuickDB(); // will make a json.sqlite in the root folder




async function createSurvey (title,description,questions){

    questions.forEach((element,i) => {
        element.id = i
        if(element.type == "radio")
            element.options = element.options.map((option)=> option = {name:option, value:0})
        if(element.type == "text")
            element.answers = []
    });

    let survey = {
        id:0,
        title,
        description,
        questions
    }

    await db.push("surveys", survey);
}

async function getSurvey (id){

    questions.forEach((element,i) => {
        element.id = i
        if(element.type == "radio")
            element.options = element.options.map((option)=> option = {name:option, value:0})
        if(element.type == "text")
            element.answers = []
    });

    let survey = {
        id:0,
        title,
        description,
        questions
    }

    await db.push("surveys", survey);
}

(async()=>{
    console.log(await db.get("surveys"))
})()

module.exports = {
    createSurvey
};