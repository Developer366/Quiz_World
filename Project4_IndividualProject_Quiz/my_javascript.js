//This is a file called my_javascript.js

var score = 0; 
var i = 0;
var quizSelection;
var NumAnswered = 0;
var NumCorrect = 0; 
var j = 0;

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
		//create_user_view(1)
		if(quizChoice == "Java Quiz"){
			quizSelection ="Java Quiz";
			var i = 0;
			create_user_view_Q1(i)
		}
		else if(quizChoice== "HTML/CSS Quiz"){
			quizSelection ="HTML/CSS Quiz";
			var j = 0;
			create_user_view_Q2(j)
		}

		return false;
	}
}

//-----------------check answer if right good job next question. iF WRONG EXPLAIN AND THEN CLICK OK and move on-----------------------------------------------
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
					setTimeout(nextQuestion,2000);
						
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



//----------------------------------------------------------------HTML CSS QUIZ-----------------------------------------------------------------------------
const create_user_view_Q1 = async (index) => {
	//const data = await fetch("https://my-json-server.typicode.com/Developer366/CUS1172_Spring2020_Kamil_Peza")
	var i=1;
	const data = await fetch('https://my-json-server.typicode.com/Developer366/CUS1172_Spring2020_Kamil_Peza/db')
	const model = await data.json()//model stores the databse
	console.log(model.Java_Quiz[index].questiontype=="MC")
//const html_element = render_widget(model.Java_Quiz[0],'#multipleChoice')//renders the view with handlebars
//document.querySelector("#app_widget").innerHTML = html_element; //selects where to render the template
	console.log(model.Java_Quiz[index].questiontype)
	console.log(model.Java_Quiz[index].questiontype=="MC")

//Multiple Choice Question	
	if (model.Java_Quiz[index].questiontype=="MC"){
		//Render The Question View and Feedback
		const html_element = render_widget(model.Java_Quiz[index],'#multipleChoice')//renders the MC view with handlebars
		const html_element_feedback = render_widget(model.Java_Quiz[index],'#feedbackView')//renders the MC view with handlebars	
		//Render the Views 
		document.querySelector("#app_widget").innerHTML = html_element;
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;
	}
//Image Multiple Choice
	else if(model.Java_Quiz[index].questiontype=="IMC"){
		//Render The Question View and Feedback
		const html_element = render_widget(model.Java_Quiz[index],'#ImageMultipleChoice')//renders the view with handlebars
		const html_element_feedback = render_widget(model.Java_Quiz[index],'#feedbackView')	
		//Render the Views
		document.querySelector("#app_widget").innerHTML = html_element;		
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;		
	}
//True or False Choice Question
	else if(model.Java_Quiz[index].questiontype=="TF"){
		//Render The Question View and Feedback
		const html_element = render_widget(model.Java_Quiz[index],'#TrueFalse')//renders the view with handlebars
		const html_element_feedback = render_widget(model.Java_Quiz[index],'#feedbackView')	
		//Render the Views
		document.querySelector("#app_widget").innerHTML = html_element;		
		document.querySelector("#app_widget_FeedBackView").innerHTML = html_element_feedback;			
	}
	
		
	
}
//Java Question References:
//https://www.placementquestion.com/category/java_question/true_false_choice/

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



