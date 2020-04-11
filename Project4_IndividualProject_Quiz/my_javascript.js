//This is a file called my_javascript.js

//var firstname = window.prompt( );
//var lastname;

//var name = 
//var quizChoice = 
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
		create_user_view(0)	
		return false;
	}
	//return false;
}

function checkAnswer() {
	//var radios = document.forms["submitAnswer"]["choice"].textContent;
	var radios = document.getElementsByName('choice');
	for(i = 0; i < radios.length; i++){
		if(radios[i].checked){
			alert("You slected" + radios[i].textContent);
		}
	}
	
	
}
//var myInfo = "<p>Question: {{}}


//main method loads when the page is loaded 
document.addEventListener('DOMContentLoaded', () => {
	//widget_html = render_view("#post_question_view");
	//document.querySelector("#app_widget").innerHTML = widget_html;
	//create_user_view(1)	
});



//gets data from fake api
const create_user_view = async (user_idx) => {
	//const data = await fetch("https://my-json-server.typicode.com/Developer366/CUS1172_Spring2020_Kamil_Peza")
	
	const data = await fetch('https://my-json-server.typicode.com/Developer366/CUS1172_Spring2020_Kamil_Peza/JavaQuizQuestions')//
	const model = await data.json()
	
	
	const html_element = render_widget(model,'#post_question_view')
	document.querySelector("#app_widget").innerHTML = html_element;
	console.log(model)
}



//render template 
const render_widget = (model, view) => {
	
	template_source = document.querySelector(view).innerHTML //view is the script tags in html that contain your template 
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
