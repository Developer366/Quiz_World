//Kamil Peza	This is a file called my_javascript.js

//global variables
var score = 0; 
var i = 0;
var quizSelection;
var NumAnswered = 0;
//var NumCorrect = 0; 
var j = 0;
var totalSeconds = 0;
var Timer;
var quizLength;	

//----------------------------------------------------Starts the Quiz after Submitting Name and Quiz Choice--------------------------------------------------------
function submitStart() {
	var name = document.getElementById("fullname").value;
	var quizChoice = document.getElementById("QuizChoice").value;
	if (name == "") {
		alert("Name must be filled out!!!");
		return false;
	}
	else{
		//resets clock and view when restarting the quiz
		totalSeconds=0;
		score=0;
		NumAnswered=0;
		document.getElementById("FinalView").style.display = "none";
		document.getElementById("app_widget").style.display = "block";
		//start of quiz timer and quiz view
		alert("Hello:  " + name + "\nQuiz selected:  " + quizChoice);
		document.getElementById("startInput").style.display = "none";
		document.getElementById("Header").innerHTML = "[NAME]: " + name + "&nbsp;&nbsp;<br>&nbsp;[QUIZ SELECTED]: " + quizChoice;
		document.getElementById("Timer").style.display = "block";

		if(quizChoice == "Java Quiz"){
			quizSelection ="Java Quiz";
			var i = 0;			
			create_user_view_Q1(i)
			Timer = setInterval(setTime, 1000);												
		}
		else if(quizChoice== "HTML/CSS Quiz"){
			quizSelection ="HTML/CSS Quiz";
			var j = 0
			create_user_view_Q2(j)
			Timer = setInterval(setTime, 1000);
		}
		return false;
	}
}
//--------------------------------------------------------functions for timer counting up-------------------------------------------------------------
function setTime() {//add a second and change the display
  ++totalSeconds;
  document.getElementById("seconds").innerHTML = displayTime(totalSeconds % 60); //gets seconds and resets after 60 seconds
  document.getElementById("minutes").innerHTML = displayTime(parseInt(totalSeconds / 60)); //gets minute when 60 diveds into 60 seconds
}

function displayTime(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } 
  else {
    return valString;
  }
}
//-----------------------check answer if right good job next question. iF WRONG EXPLAIN AND THEN CLICK OK and move on--------------------------------------------
function checkAnswer() {
		
	var i = 0;
	var list = document.getElementsByName("choice");
	var answer = document.getElementById("answer").innerHTML; 	
	console.log(list)
	
			for(var i = 0; i < list.length; i++){
			
			if(list[i].checked == true){			
				console.log(answer)
				if(list[i].value==answer){
					//correct view then next question
					console.log(list[i].value)
					document.getElementById("SubmitAnswer").style.display = "none";
					document.getElementById("feedBackView").style.display = "block";
					document.getElementById("correctAnswer").style.display = "block";
					score++;
					document.getElementById("score").innerHTML = "Correct Answers: " + score;
					NumAnswered++;
					document.getElementById("numAnswered").innerHTML = "Questions attempted: " + NumAnswered;				
					setTimeout(nextQuestion,2000);	
				}
				else {
					//wrong view then press ok for next question
					document.getElementById("SubmitAnswer").style.display = "none";
					document.getElementById("feedBackView").style.display = "block";
					document.getElementById("wrongAnswer").style.display = "block";
					document.getElementById("OK").addEventListener("click",nextQuestion);
					NumAnswered++;
					document.getElementById("numAnswered").innerHTML = "Questions attempted: " + NumAnswered;
					document.getElementById("score").innerHTML = "Correct Answers: " + score;					
				}			
			}
		}
	}
	
function checkAnswerFITB(){
	var answer = document.getElementById("answer").innerHTML; 
	var input = document.getElementById("FillIn").value;
	var FixedInput = input.toLowerCase();

/*	
	if(model.Java_Quiz[index].questiontype=="SA"){
		FixedInput = input;
	}
*/

	if(answer==FixedInput){
		//correct view then next question
		document.getElementById("SubmitAnswer").style.display = "none";
		document.getElementById("feedBackView").style.display = "block";
		document.getElementById("correctAnswer").style.display = "block";
		score++;
		document.getElementById("score").innerHTML = "Correct Answers: " + score;
		NumAnswered++;
		document.getElementById("numAnswered").innerHTML = "Questions attempted: " + NumAnswered;				
		setTimeout(nextQuestion,1000);
	}
	else{
		//wrong view then press ok for next question
		document.getElementById("SubmitAnswer").style.display = "none";
		document.getElementById("feedBackView").style.display = "block";
		document.getElementById("wrongAnswer").style.display = "block";
		document.getElementById("OK").addEventListener("click",nextQuestion);
		NumAnswered++;
		document.getElementById("numAnswered").innerHTML = "Questions attempted: " + NumAnswered;
		document.getElementById("score").innerHTML = "Correct Answers: " + score;
	}
}	
//---------------------------------------------------------------Next Question Rendered---------------------------------------------------------------
function nextQuestion(){
	if(quizSelection=="Java Quiz"){
		if(i<quizLength){ //quizLength used to determine to end the quiz
		i++;
		create_user_view_Q1(i)
		}
		else {
			ShowScore();
			clearInterval(Timer);
		}
	}
	else if(quizSelection=="HTML/CSS Quiz"){
		if(i<quizLength){ //quizLength used to determine to end the quiz
		j++;
		create_user_view_Q2(j)
		}
		else {
			ShowScore();
			clearInterval(Timer);
		}	
	}	
}

function ShowScore(){
	var finalScore = (score/NumAnswered) * 100;
	document.getElementById("app_widget").style.display = "none";
	document.getElementById("feedBackView").style.display = "none";
	document.getElementById("FinalView").style.display = "block";
	document.getElementById("FinalScore").innerHTML = "Your Final Score is: " + finalScore + "%";
	if(finalScore<80){
		document.getElementById("PassOrFail").innerHTML = "I am sorry but you failed. An 80 or higher is passing.";
		i=0;
	}
	else {
		document.getElementById("PassOrFail").innerHTML = "You passed the Quiz. Congratulations!";
		i=0;
	}
}
//----------------------------------------------------------------Java QUIZ-----------------------------------------------------------------------------
const create_user_view_Q1 = async (index) => {
	var i=1;
	const data = await fetch('https://my-json-server.typicode.com/Developer366/CUS1172_Spring2020_Kamil_Peza/db')
	const model = await data.json()//model stores the databse
	quizLength = model.Java_Quiz.length-1; 	
	
//1 Multiple Choice Question	
	if (model.Java_Quiz[index].questiontype=="MC"){
		//Render right handlebar template for the question type
		const html_element = render_widget(model.Java_Quiz[index],'#multipleChoice')//renders the MC view with handlebars
		const html_element_feedback = render_widget(model.Java_Quiz[index],'#feedbackView')//renders the MC view with handlebars	
		document.querySelector("#app_widget").innerHTML = html_element;
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;
	}
//2 Image Multiple Choice
	else if(model.Java_Quiz[index].questiontype=="IMC"){
		//Render right handlebar template for the question type
		const html_element = render_widget(model.Java_Quiz[index],'#ImageMultipleChoice')//renders the view with handlebars
		const html_element_feedback = render_widget(model.Java_Quiz[index],'#feedbackView')	
		document.querySelector("#app_widget").innerHTML = html_element;		
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;		
	}
//3 True or False Choice Question
	else if(model.Java_Quiz[index].questiontype=="TF"){
		//Render right handlebar template for the question type
		const html_element = render_widget(model.Java_Quiz[index],'#TrueFalse')//renders the view with handlebars
		const html_element_feedback = render_widget(model.Java_Quiz[index],'#feedbackView')	
		document.querySelector("#app_widget").innerHTML = html_element;		
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;			
	}
//4 Fill in the Blank FITB Question
	else if(model.Java_Quiz[index].questiontype=="FITB"){
		//Render right handlebar template for the question type
		const html_element = render_widget(model.Java_Quiz[index],'#FITB')//renders the view with handlebars
		const html_element_feedback = render_widget(model.Java_Quiz[index],'#feedbackView')	
		document.querySelector("#app_widget").innerHTML = html_element;		
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;
	}	
//5 Short Answer Question
	else if(model.Java_Quiz[index].questiontype=="SA"){
		//Render right handlebar template for the question type
		const html_element = render_widget(model.Java_Quiz[index],'#SA')//renders the view with handlebars
		const html_element_feedback = render_widget(model.Java_Quiz[index],'#feedbackView')	
		document.querySelector("#app_widget").innerHTML = html_element;		
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;
	}			
	
}
//Java Question References:
//https://www.placementquestion.com/category/java_question/true_false_choice/
//http://bssve.in/QuestionBank/JAVA.asp

//--------------------------------------------------------HTML CSS QUIZ-------------------------------------------------------------------------------------
const create_user_view_Q2 = async (index) => {
	var i=1;
	const data = await fetch('https://my-json-server.typicode.com/Developer366/project_milestone1_jsonDatabase2/db')
	const model = await data.json()//model stores the databse
	quizLength = model.HTML_CSS_QUIZ.length-1; 	
	
//1 Multiple Choice Question	
	if (model.HTML_CSS_QUIZ[index].questiontype=="MC"){
		//Render right handlebar template for the question type
		const html_element = render_widget(model.HTML_CSS_QUIZ[index],'#multipleChoice')//renders the MC view with handlebars
		const html_element_feedback = render_widget(model.HTML_CSS_QUIZ[index],'#feedbackView')//renders the MC view with handlebars	
		document.querySelector("#app_widget").innerHTML = html_element;
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;
	}
//2 Image Multiple Choice
	else if(model.HTML_CSS_QUIZ[index].questiontype=="IMC"){
		//Render right handlebar template for the question type
		const html_element = render_widget(model.HTML_CSS_QUIZ[index],'#ImageMultipleChoice')//renders the view with handlebars
		const html_element_feedback = render_widget(model.HTML_CSS_QUIZ[index],'#feedbackView')	
		document.querySelector("#app_widget").innerHTML = html_element;		
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;		
	}
//3 True or False Choice Question
	else if(model.HTML_CSS_QUIZ[index].questiontype=="TF"){
		//Render right handlebar template for the question type
		const html_element = render_widget(model.HTML_CSS_QUIZ[index],'#TrueFalse')//renders the view with handlebars
		const html_element_feedback = render_widget(model.HTML_CSS_QUIZ[index],'#feedbackView')	
		document.querySelector("#app_widget").innerHTML = html_element;		
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;			
	}
//4 Fill in the Blank FITB Question
	else if(model.HTML_CSS_QUIZ[index].questiontype=="FITB"){
		//Render right handlebar template for the question type
		const html_element = render_widget(model.HTML_CSS_QUIZ[index],'#FITB')//renders the view with handlebars
		const html_element_feedback = render_widget(model.HTML_CSS_QUIZ[index],'#feedbackView')	
		document.querySelector("#app_widget").innerHTML = html_element;		
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;
	}	
//5 Short Answer Question
	else if(model.HTML_CSS_QUIZ[index].questiontype=="SA"){
		//Render right handlebar template for the question type
		const html_element = render_widget(model.HTML_CSS_QUIZ[index],'#SA')//renders the view with handlebars
		const html_element_feedback = render_widget(model.HTML_CSS_QUIZ[index],'#feedbackView')	
		document.querySelector("#app_widget").innerHTML = html_element;		
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;
	}				
	
}

//-------------------------------------------------Handlebars Function for rendering templates------------------------------------------------------
const render_widget = (model, view) => {
	
	template_source = document.querySelector(view).innerHTML; //view is the script tags in html that contain your template 
	var template = Handlebars.compile(template_source);	
	var html_widget_element = template(model)
	console.log(html_widget_element)
	return html_widget_element
}



/* Code for troubleshooting 

//var html_widget_element = template({...modle,...appState}

//var name = document.forms["myForm"]["fullname"].value;
//var quizChoice = document.forms["myForm"]["QUIZ"].value;

//var checkedAnswer = x[i].checked;



	if(quizChoice=="Java Quiz"){
		create_user_view_Q1(i)
	}
	else if(quizChoice=="HTML/CSS Quiz"){
		create_user_view_Q2(j)
	}
	
	//console.log("asdsasd")


//console.log("dfdsdf")
	
	if(quizChoice=="Java Quiz"){
			create_user_view_Q1(i)
		}
		else if(quizChoice=="HTML/CSS Quiz"){
			create_user_view_Q2(j)
		}
	
	
	if(){
		
		
	}
	else{
		
	}
	//var radios = document.forms["submitAnswer"]["choice"].textContent;
	var radios = document.getElementsByName('choice');
	
	for(int i=0; model.options.length; i++){
		if 
	}
	
	
	for(i = 0; i < radios.length; i++){
		if(radios[i].checked){
			alert("You slected" + radios[i].textContent);
		}
	}
	var option1 = document.getElementById("option1");
	var option2 = document.getElementById("option2");
	var option3 = document.getElementById("option3");
	var option4 = document.getElementById("option4"); 
	
	


//gets data from fake api
//var quizSelection;

//var questionNum = 0;
//var quizSelection;
//create_user_view(Java_Quiz, 0)
//Java Quiz
console.log()



//selects where to render the template
//document.querySelector("#app_widget").innerHTML = html_element; //selects where to render the template



//selects where to render the template
	//document.querySelector("#app_widget").innerHTML = html_element; //selects where to render the template


/*function setTime(){
	
	function IncrementTime(){
		seconds++;
	}
	setInterval(IncrementTime, 1000);
}
*/



/*		
//main method loads when the page is loaded 
document.addEventListener('DOMContentLoaded', () => {
	//widget_html = render_view("#post_question_view");
	//document.querySelector("#app_widget").innerHTML = widget_html;
	//create_user_view(1)	
});
*/

//const html_element = render_widget(model.Java_Quiz[0],'#multipleChoice')//renders the view with handlebars
//document.querySelector("#app_widget").innerHTML = html_element; //selects where to render the template
	//console.log(model.Java_Quiz[index].questiontype)
	//console.log(model.Java_Quiz[index].questiontype=="MC")
	//console.log(model.Java_Quiz[index].questiontype== undefined)

//const html_element = render_widget(model.HTML_CSS_QUIZ[index],'#multipleChoice')//renders the view with handlebars



