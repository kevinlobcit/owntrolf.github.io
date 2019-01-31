let quiz;

function getQuizSize()
{
    quiz = JSON.parse(localStorage.getItem("quiz"));
    
    if(quiz==null){
        return 0;
    }
    return quiz.length;
}

function retrQuizSize()
{
    document.getElementById("message").innerHtml = "There are " + getQuizSize() + " questions";
}

function storeQuiz()
{
    quiz = JSON.parse(localStorage.getItem("quiz"));
    if(quiz==null){
        quiz = [];
    }
    let payload = createJSON();
    quiz.push(payload);
    document.getElementById("message").innerHTML="Successfully added";
    let strQuiz = JSON.stringify(quiz);
    localStorage.setItem("quiz", strQuiz);
}

function removeQuestion()
{
    let num = document.getElementById("num").value-1;
    quiz = JSON.parse(localStorage.getItem("quiz"));
    quiz.splice(num, 1);
    
    let strQuiz = JSON.stringify(quiz);
    localStorage.setItem("quiz", strQuiz);
    document.getElementById("message").innerHTML="Successfully removed";
}

function editQuestion()
{
    let num = document.getElementById("num").value-1;
    quiz = JSON.parse(localStorage.getItem("quiz"));
    
    let questionIn = document.getElementById("questiontext").value;
    let c1 = document.getElementById("choice1").value;
    let c2 = document.getElementById("choice2").value;
    let c3 = document.getElementById("choice3").value;
    let c4 = document.getElementById("choice4").value;
    let answr = 1;
    if(document.getElementById("radio1").checked==true){
        answr = 1;
    }
    if(document.getElementById("radio2").checked==true){
        answr = 2;
    }
    if(document.getElementById("radio3").checked==true){
        answr = 3;
    }
    if(document.getElementById("radio4").checked==true){
        answr = 4;
    }
    
    quiz[num].question = questionIn;
    quiz[num].choices = [c1,c2,c3,c4];
    quiz[num].answer = answr;
    
    let strQuiz = JSON.stringify(quiz);
    localStorage.setItem("quiz", strQuiz);
    document.getElementById("message").innerHTML="Successfully edited";
}



function createJSON() {
    let questionIn = document.getElementById("questiontext").value;
    let c1 = document.getElementById("choice1").value;
    let c2 = document.getElementById("choice2").value;
    let c3 = document.getElementById("choice3").value;
    let c4 = document.getElementById("choice4").value;
    let answr = 0;
    
    
    if(document.getElementById("radio1").checked==true){
        answr = 1;
    }
    if(document.getElementById("radio2").checked==true){
        answr = 2;
    }
    if(document.getElementById("radio3").checked==true){
        answr = 3;
    }
    if(document.getElementById("radio4").checked==true){
        answr = 4;
    }
    
    let jsonObj = {
        question: questionIn,
        choices: [c1,c2,c3,c4],
        answer: answr
    }
    
    let payload = jsonObj;
    //let payload = JSON.stringify(jsonObj);
    return payload;
}