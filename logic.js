var pos = 0, rendered_Question = 0,user_ans=0,correct=0,var_1=0,var_2=0,var_3=0,var_4 = 0;

var allQuestions = [
				  {question: "Who is Prime Minister of the United Kingdom?", 
choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
correctAnswer:0}, {question: "What is HTML stands for?", 
choices: ["Hero Towers Mountines Lakes", "How To Make Ladies", "Hyper Text Markup Language", "Hints To Make Layout"], 
correctAnswer:2}, {question: "What is the capital of German?", 
choices: ["Paris", "Amsterdam", "Kiev", "Berlin"], 
correctAnswer:3}, {question: "What is a process of an official lowering of the exchange value of a country's currency relative to gold or other currencies?", 
choices: ["Inflation", "Devaluation", "Revaluation", "Default"], 
correctAnswer:1}, {question: "Inside which HTML element do we put the JavaScript?", 
choices: ["&lt javascript &gt", "&lt scripting &gt", "&lt js &gt", "&lt script &gt"], 
correctAnswer:3}, {question: "When The World War 2 was started?", 
choices: ["1941", "1939", "1945", "1917"], 
correctAnswer:1}
				];

function render_question () {
	if (pos >= allQuestions.length){
		document.getElementById("header").innerHTML="Congratulations!"
		document.getElementById("active_questions").innerHTML=
		"You have "+correct+" correct answers from "+allQuestions.length+" questiuons!";
		document.getElementById("active_answers").innerHTML="Test finished<br><br>";
		document.getElementById("active_answers").innerHTML +="<button onclick='window.location.reload()'>Try again</button><br>";
		pos=0;
		correct=0;
		return false;
	}
	document.getElementById("active_questions").innerHTML="Question "+(pos+1)+" from "+allQuestions.length+": ";
	
	rendered_Question = allQuestions[pos].question;
	
	var_1=allQuestions[pos].choices[0];
	var_2=allQuestions[pos].choices[1];
	var_3=allQuestions[pos].choices[2];
	var_4=allQuestions[pos].choices[3];

	document.getElementById("active_questions").innerHTML += rendered_Question;
	document.getElementById("active_answers").innerHTML ="<input type='radio' name='user_ans' value='0'>"+var_1+"<br>";
	document.getElementById("active_answers").innerHTML +="<input type='radio' name='user_ans' value='1'>"+var_2+"<br>";
	document.getElementById("active_answers").innerHTML +="<input type='radio' name='user_ans' value='2'>"+var_3+"<br>";
	document.getElementById("active_answers").innerHTML +="<input type='radio' name='user_ans' value='3'>"+var_4+"<br><br>";
	document.getElementById("active_answers").innerHTML +="<button onclick='checkAnswer()' >Submit answer</button><br><br>";
	}

function checkAnswer (){
	user_ans = document.getElementsByName("user_ans");
	key_answer=allQuestions[pos].correctAnswer;
	for(var i=0; i<user_ans.length; i++){
		if (user_ans[i].checked){
			choice=user_ans[i].value;
		}

	}

	if(choice == key_answer){
		correct++;
	}
	 	pos++;
		render_question();
}

window.addEventListener("load", render_question, false);