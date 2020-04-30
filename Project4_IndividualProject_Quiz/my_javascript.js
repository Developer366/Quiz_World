//This is a file called my_javascript.js

var score = 0; 
var i = 0;
var quizSelection;
var NumAnswered = 0;
var NumCorrect = 0; 
var j = 0;

var totalSeconds = 0;

//----------------------------------------------------Starts the Quiz after Submitting Name and Quiz Choice--------------------------------------------------------
function submitStart() {
	var name = document.getElementById("fullname").value;
	var quizChoice = document.getElementById("QuizChoice").value;
	if (name == "") {
		alert("Name must be filled out!!!");
		return false;
	}
	else{
		alert("Hello:  " + name + "\nQuiz selected:  " + quizChoice);
		//document.getElementById("startInput").submit();
		document.getElementById("startInput").style.display = "none";
		document.getElementById("Header").innerHTML = "[NAME]: " + name + "&nbsp;&nbsp;<br>&nbsp;[QUIZ SELECTED]: " + quizChoice;
		document.getElementById("Timer").style.display = "block";
		//document.getElementById("minutes").style.display = "block";
		//create_user_view(1)
		if(quizChoice == "Java Quiz"){
			quizSelection ="Java Quiz";
			var i = 10;			
			create_user_view_Q1(i)
			setInterval(setTime, 1000);												
		}
		else if(quizChoice== "HTML/CSS Quiz"){
			quizSelection ="HTML/CSS Quiz";
			var j = 0;
			create_user_view_Q2(j)
			setInterval(setTime, 1000);
		}

		return false;
	}
}
//-----------------------------------functions for timer-----------------------------------------
function setTime() {
  ++totalSeconds;
  document.getElementById("seconds").innerHTML = displayTime(totalSeconds % 60); //gets seconds and resets after 60 seconds
  //secondsLabel.innerHTML = pad(totalSeconds % 60);
  document.getElementById("minutes").innerHTML = displayTime(parseInt(totalSeconds / 60)); //gets minute when 60 diveds into 60 seconds
  //minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
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



/*function setTime(){
	
	function IncrementTime(){
		seconds++;
	}
	setInterval(IncrementTime, 1000);
}
*/


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
					console.log(list[i].value)
					document.getElementById("SubmitAnswer").style.display = "none";
					document.getElementById("feedBackView").style.display = "block";
					document.getElementById("correctAnswer").style.display = "block";
					score++;
					document.getElementById("score").innerHTML = "Correct Answers: " + score;
					NumAnswered++;
					document.getElementById("numAnswered").innerHTML = "Questions attempted: " + NumAnswered;				
					setTimeout(nextQuestion,1000);	
				}
				else {
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
	
	if(answer==FixedInput){
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
		i++;
		create_user_view_Q1(i)
	}
	else if(quizSelection=="HTML/CSS Quiz"){
		j++;
		create_user_view_Q2(j)
	}	
}
		
//main method loads when the page is loaded 
document.addEventListener('DOMContentLoaded', () => {
	//widget_html = render_view("#post_question_view");
	//document.querySelector("#app_widget").innerHTML = widget_html;
	//create_user_view(1)	
});

function ShowScore(){
	var finalScore = score/NumAnswered;
	document.getElementById("app_widget").innerHTML = "Your Final Score is: "  + finalScore;
	//document.getElementById("score").innerHTML = "Correct Answers: " + score;
	
}



//----------------------------------------------------------------Java QUIZ-----------------------------------------------------------------------------
const create_user_view_Q1 = async (index) => {
	//const data = await fetch("https://my-json-server.typicode.com/Developer366/CUS1172_Spring2020_Kamil_Peza")
	var i=1;
	const data = await fetch('https://my-json-server.typicode.com/Developer366/CUS1172_Spring2020_Kamil_Peza/db')
	const model = await data.json()//model stores the databse
	
//const html_element = render_widget(model.Java_Quiz[0],'#multipleChoice')//renders the view with handlebars
//document.querySelector("#app_widget").innerHTML = html_element; //selects where to render the template
	console.log(model.Java_Quiz[index].questiontype)
	console.log(model.Java_Quiz[index].questiontype=="MC")

//1 Multiple Choice Question	
	if (model.Java_Quiz[index].questiontype=="MC"){
		//Render The Question View and Feedback
		const html_element = render_widget(model.Java_Quiz[index],'#multipleChoice')//renders the MC view with handlebars
		const html_element_feedback = render_widget(model.Java_Quiz[index],'#feedbackView')//renders the MC view with handlebars	
		//Render the Views 
		document.querySelector("#app_widget").innerHTML = html_element;
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;
	}
//2 Image Multiple Choice
	else if(model.Java_Quiz[index].questiontype=="IMC"){
		//Render The Question View and Feedback
		const html_element = render_widget(model.Java_Quiz[index],'#ImageMultipleChoice')//renders the view with handlebars
		const html_element_feedback = render_widget(model.Java_Quiz[index],'#feedbackView')	
		//Render the Views
		document.querySelector("#app_widget").innerHTML = html_element;		
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;		
	}
//3 True or False Choice Question
	else if(model.Java_Quiz[index].questiontype=="TF"){
		//Render The Question View and Feedback
		const html_element = render_widget(model.Java_Quiz[index],'#TrueFalse')//renders the view with handlebars
		const html_element_feedback = render_widget(model.Java_Quiz[index],'#feedbackView')	
		//Render the Views
		document.querySelector("#app_widget").innerHTML = html_element;		
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;			
	}
//4 Fill in the Blank FITB Question
	else if(model.Java_Quiz[index].questiontype=="FITB"){
		//Render The Question View and Feedback
		const html_element = render_widget(model.Java_Quiz[index],'#FITB')//renders the view with handlebars
		const html_element_feedback = render_widget(model.Java_Quiz[index],'#feedbackView')	
		//Render the Views
		document.querySelector("#app_widget").innerHTML = html_element;		
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;
	}	
//5 Short Answer Question
	else if(model.Java_Quiz[index].questiontype=="SA"){
		//Render The Question View and Feedback
		const html_element = render_widget(model.Java_Quiz[index],'#FITB')//renders the view with handlebars
		const html_element_feedback = render_widget(model.Java_Quiz[index],'#feedbackView')	
		//Render the Views
		document.querySelector("#app_widget").innerHTML = html_element;		
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;
	}
	else{
		ShowScore()
	}
	
}
//Java Question References:
//https://www.placementquestion.com/category/java_question/true_false_choice/
//http://bssve.in/QuestionBank/JAVA.asp
//https://www.placementquestion.com/category/java_question/true_false_choice/2

//--------------------------------------------------------HTML CSS QUIZ-------------------------------------------------------------------------------------
const create_user_view_Q2 = async (index) => {
	//const data = await fetch("https://my-json-server.typicode.com/Developer366/CUS1172_Spring2020_Kamil_Peza")
	var i=1;
	const data = await fetch('https://my-json-server.typicode.com/Developer366/CUS1172_Spring2020_Kamil_Peza/db')
	const model = await data.json()//model stores the databse
	const html_element = render_widget(model.HTML_CSS_QUIZ[index],'#multipleChoice')//renders the view with handlebars
	//const html_element = render_widget(model.Java_Quiz[0],'#multipleChoice')//renders the view with handlebars

	document.querySelector("#app_widget").innerHTML = html_element; //selects where to render the template
	var a = 1;
	console.log(model.Java_Quiz[a])
}


//-------------------------------------------------render template 
const render_widget = (model, view) => {
	
	template_source = document.querySelector(view).innerHTML; //view is the script tags in html that contain your template 
	//console.log(tempalte_source);
	// Handlebars compiles the above source into a template
	var template = Handlebars.compile(template_source);
	
	//var html_widget_element = template({...modle,...appState}
	var html_widget_element = template(model)
	console.log(html_widget_element)
	return html_widget_element
	
}









/* Code for troubleshooting 



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

*/



