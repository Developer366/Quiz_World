//This is a file called my_javascript.js
//Global Variables

var i = 0;

function submitStart() {
	//var name = document.forms["myForm"]["fullname"].value;
	//var quizChoice = document.forms["myForm"]["QUIZ"].value;
	var name = document.getElementById("fullname").value;
	var quizChoice = document.getElementById("QUIZ").value;
	if (name == "") {
		alert("Name must be filled out!!!");
		return false;
	}
	else{
		alert("Hello " + name + "\nQuiz selected: " + quizChoice);
		//document.getElementById("startInput").submit();
		document.getElementById("startInput").style.display = "none";
		document.getElementById("Header").innerHTML = "NAME: " + name + "&nbsp;&nbsp;-------&nbsp;&nbsp;QUIZ SELECTED: " + quizChoice;
		create_user_view(i)	
		return false;
	}
	//return false;
}
//check answer if right good job next question. iF WRONG EXPLAIN AND THEN CLICK OK and move on.
function checkAnswer() {
	var option1 = document.getElementById("option1");
	var option2 = document.getElementById("option2");
	var option3 = document.getElementById("option3");
	var option4 = document.getElementById("option4"); 

	
/*	
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
	
*/	
}


//main method loads when the page is loaded 
document.addEventListener('DOMContentLoaded', () => {
	//widget_html = render_view("#post_question_view");
	//document.querySelector("#app_widget").innerHTML = widget_html;
	//create_user_view(1)	
});



//gets data from fake api
const create_user_view = async (index) => {
	//const data = await fetch("https://my-json-server.typicode.com/Developer366/CUS1172_Spring2020_Kamil_Peza")
	
	const data = await fetch('https://my-json-server.typicode.com/Developer366/CUS1172_Spring2020_Kamil_Peza/db')//
	const model = await data.json()
		//document.getElementById()
	
	const html_element = render_widget(model,'#multipleChoice')
	document.querySelector("#app_widget").innerHTML = html_element;
	//console.log(model[index])
}




//render template 
const render_widget = (model, view) => {
	
	template_source = document.querySelector(view).innerHTML; //view is the script tags in html that contain your template 
	//console.log(tempalte_source);
	// Handlebars compiles the above source into a template
	var template = Handlebars.compile(template_source);

	console.log(model)
	//var html_widget_element = template({...modle,...appState})
	var html_widget_element = template(model)
	console.log(html_widget_element)
	return html_widget_element
	
}


//document.getElementById("form_id").submit();// Form submission	
	//apply the model to the template.
/*	
	var model = {
		question : 'Ayayayayaya'
	}
*/	
