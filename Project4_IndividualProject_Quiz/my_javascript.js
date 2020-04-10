//This is a file called my_javascript.js

//var firstname = window.prompt( );
//var lastname;
function submitStart() {
	var x = document.forms["myForm"]["fullname"].value;
	if (x == "") {
		alert("Name must be filled out!!!");
		return  false;
	}
	else{
		document.getElementById("startInput").submit();
	}
	
}

//var myInfo = "<p>Question: {{}}



document.addEventListener('DOMContentLoaded', () => {
	widget_html = render_view("#post_question_view");
	document.querySelector("#app_widget").innerHTML = widget_html;
	
});


//render template 
const render_view = (view) => {
	
	template_source = document.querySelector(view).innerHTML
	//console.log(tempalte_source);
	// Handlebars compiles the above source into a template
	var template = Handlebars.compile(template_source);
	
	//apply the model to the template.
	
	var model = {
		question : 'Ayayayayaya'
	}
	
	console.log(model)
	//var html_widget_element = template({...modle,...appState})
	var html_widget_element = template(model)
	
	return html_widget_element
	
	
}

//gets data from fake api

const create_user_view = async (user_idx) => {
	//const data = await fetch("https://jsonplaceholder.typicode.com/photos/1")
	const data = await fetch("url")
	const model = await data.json()
	const html_element = render_widget(model, '#user_view')
	document.querySelector("app_widget").innerHTML = html_element;
}


