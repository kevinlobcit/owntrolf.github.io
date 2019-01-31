let data = JSON.parse(localStorage.getItem("quiz"));

function drawQuiz()
{
    for(let i = 0; i < data.length; i++) 
    {
        makeQuestionHeader(i)
        
        for(let choiceNumber=0; choiceNumber < data[i].choices.length; choiceNumber++)
        {
            makeRadioButton(i, choiceNumber, choiceNumber);
            document.getElementById("quizarea").appendChild(document.createElement('br'));
        }
        document.getElementById("quizarea").appendChild(document.createElement('br'));
    }
}

function makeQuestionHeader(questionNumber)
{
    let text = data[questionNumber].question + "<br/>";
	let qNode = document.createTextNode(text);
	
	let divNode = document.createElement("div");
	divNode.innerHTML = "q" + (questionNumber+1) + ")" + text;
	document.getElementById("quizarea").appendChild(divNode);
}

function makeRadioButton(questionNumber, choiceNumber, radioNumber)
{
    let covering = document.createElement("div");
    let node = document.createElement("input");
    node.type = "radio";
    node.name = "q" + (questionNumber+1);
    node.value = (choiceNumber + 1);
    var inText = document.createTextNode(data[questionNumber].choices[choiceNumber]);
    
    covering.appendChild(node);
    covering.appendChild(inText);
    covering.id = "q" + (questionNumber+1) + "r" + (radioNumber+1);
    
    document.getElementById("quizarea").appendChild(covering);
    
    //document.getElementById("quizarea").appendChild(node);
    //document.getElementById("quizarea").appendChild(inText);
}

function getSelectedValue(qNum, i)
{
    let radioButtons = document.getElementsByName(qNum);
    let sRadioValue = 1;
    for(let radio = 0; radio < 4; radio++)
    {
        if(radioButtons[radio].checked) {
            sRadioValue = radioButtons[radio].value;
        }
    }
    return sRadioValue;
}

function highlightCorrect(qNum)
{
    let radioButtons = document.getElementsByName(qNum);
    for(let radio = 0; radio < 4; radio++)
    {
        if(radioButtons[radio].checked) {
            let highlightDiv = document.getElementById(qNum + "r" + (radio+1));
            highlightDiv.style.backgroundColor = "lime";
        }
    }
}

function highlight(qNum, i, sValue)
{
    let correct = data[i].answer;
    let correctDiv = document.getElementById(qNum + "r" + (correct));
    correctDiv.style.backgroundColor = "yellow";
    let incorrectDiv = document.getElementById(qNum + "r" + (sValue));
    incorrectDiv.style.backgroundColor = "olive";
}

function checkQuiz()
{
    for(let i = 0; i < data.length; i++)
    {
        let qNum = "q" + (i+1);
        
        let sValue = getSelectedValue(qNum, i);
        let text = qNum + " false";
        
        if(data[i].answer == sValue && document.getElementsByName(qNum)[sValue].checked)
        {
            highlightCorrect(qNum);
            text = qNum + " true";
        }
        
        else
        {
            highlight(qNum, i, sValue);
        }
        
        let textNode = document.createTextNode(text);
        document.getElementById("results").appendChild(textNode);
    }

}


drawQuiz();