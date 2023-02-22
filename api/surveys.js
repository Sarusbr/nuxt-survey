const { QuickDB } = require("quick.db");
const db = new QuickDB(); // will make a json.sqlite in the root folder

let id = 0;

(async()=>{
    const surveys = await db.all()
    id = surveys[surveys.length-1]?.value[0]?.id ?? 0
})()



async function createSurvey (title,description,questions){

    id +=1;
    if(!id || !title || !description || !questions) 
        return {error:"Lütfen tüm alanları doldurunuz"}

    questions.forEach((element,i) => {
        element.id = i
        if(element.type == 0)
            element.options = element.options.map((option)=> option = {name:option, value:0})
        if(element.type == 1)
            element.answers = []
    });

    let survey = {
        id,
        title,
        description,
        questions
    }
    return await db.set("surveys_"+id, survey);
}

async function getSurvey (surveyId){
    let result = []

    if(surveyId)
        return await db.get("surveys_"+surveyId)

    let surveys = await db.all()
    console.log(surveys)
    surveys.forEach(element =>{
        console.log(element)
        const {id, title, description} = element.value
        result.push({
            id,
            title,
            description
        })
    });

    return result
}

async function fillSurvey (surveyId,answers){
    let survey = (await db.get(`surveys_${surveyId}`))
    console.log(survey)
    answers.forEach(element => {
        if(survey.questions[element.id].answers)
            survey.questions[element.id].answers.push(element.value)
        if(survey.questions[element.id].options)
            survey.questions[element.id].options.forEach(option => {
                if(option.name == element.value) option.value +=1;
            });
    });
  
    return await db.set(`surveys_${surveyId}.questions`,survey.questions)
}


module.exports = {
    createSurvey,
    getSurvey,
    fillSurvey
};