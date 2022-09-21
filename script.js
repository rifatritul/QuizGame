var questions = [{
	question: "What is the capital of Australia?",
	options: ["Sydney", "Canberra", "Melbourne", "Perth"],
	correct: 1
}, {
	question: "What is the capital of Brazil?",
	options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
	correct: 2
}, {
	question: "What is the capital of Croatia?",
	options: ["Zagreb", "Zadar", "Pula", "Velika Gorica"],
	correct: 0
}, {
	question: "What is the capital of Hungary?",
	options: ["Debrecen", "Győr", "Budapest", "Pécs"],
	correct: 2
}, {
	question: "What is the capital of Bulgaria?",
	options: ["Plovdiv", "Veliko Tarnovo", "Burgas", "Sofia"],
	correct: 3
}, {
	question: "What is the capital of Chile?",
	options: ["Viña del Mar", "Valparaíso", "Santiago", "Concepcion"],
	correct: 2
}, {
	question: "What is the capital of Cuba?",
	options: ["Santiago de Cuba", "Havana", "Santa Clara", "Trinidad"],
	correct: 1
}, {
	question: "What is the capital of Columbia?",
	options: ["Pereira", "Cali", "Medellín", "Bogotá"],
	correct: 3
}, {
	question: "What is the capital of Bosnia and Herzegovina?",
	options: ["Mostar", "Sarajevo", "Banja Luka", "Zenica"],
	correct: 1
}, {
	question: "What is the capital of Ethiopia?",
	options: ["Addis Ababa", "Dire Dawa", "Gondar", "Hawassa"],
	correct: 0
}]

var quesNo = 0;
var correctAnswer = 0;
var choice = document.querySelectorAll(".choices");

function startQuiz(){
	document.getElementById('quiz-container').style.display="block";
	document.getElementById('btn').style.display="none";
	nextQuestion();
}
function nextQuestion(){
		if (quesNo==10) {
			quesNo = 0;
			correctAnswer = 0;
			document.getElementById('score').style.display="none";
	}
		var elements = document.getElementsByTagName("input");
		for (var i = 0; i < elements.length; i++) {
			if (elements[i].type == "radio") {
				elements[i].checked = false;
				choice[i].style.color = "black";
        }
    }


    	document.getElementById('question-container').innerHTML=questions[quesNo].question;
		document.getElementById('options-container').style.display="block";

		document.getElementById('next').style.display="none";
		document.getElementById('submit').style.display="block";
		
		for (let i = 0; i < questions[quesNo].options.length; i++) {
			choice[i].innerHTML=questions[quesNo].options[i];
		}
		console.log("Question Number : "+ quesNo);
		
}
function checkAnswer(){

	document.getElementById('submit').style.display="none";
	document.getElementById('next').style.display="block";

	
	var selected=document.querySelector('input[name="opt"]:checked');
	if (selected == null) {
		document.getElementById('status').innerHTML="Select an answer first."
		document.getElementById('submit').style.display="block";
		document.getElementById('next').style.display="none";

	}else if (selected.value == questions[quesNo].correct) {
		console.log("Answer Selected : "+selected.value);
		choice[questions[quesNo].correct].style.color = "green";
		correctAnswer++;
		document.getElementById('status').innerHTML=""
		quesNo++;
	}
	else{
		choice[questions[quesNo].correct].style.color = "green";
		choice[selected.value].style.color = "red";
		document.getElementById('status').innerHTML=""
		quesNo++;
	}
	document.getElementById('score').innerHTML="Score : " + correctAnswer + "/10";
	if (quesNo == 10) {
			document.getElementById('next').innerHTML=("Play Again");
		}
}