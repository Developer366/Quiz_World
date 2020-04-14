# CUS1172_Spring2020_Kamil_Peza

# Project 4: Individual Project (Milestone 1)

# CUS 1172

# Spring Semester 2020

# Kamil Peza



# -------------Kamil Peza [Completion Report]----------------

## COVER PAGE

## Project 4: Individual Project (Milestone 1)

## Deliverable 4.2: Source code release report

## Course Number: CUS1172

## Spring Semester 2020

## Project Requirements:



•	User will be asked to provide their names and quiz selection via input form

•	After name and quiz selection are inputted, the quiz should begin

•	Quiz should appear in a separate view within your application

•	Quiz information will be load asynchronously from a static rest API endpoint 

•	Each quiz includes different types of questions: multiple choice, fill-in, etc.

•	Each question will show one at a time and an appropriate interface will be shown for each question

•	After an answer is submitted, the answer is evaluated whether correct or wrong and feedback should be provided

•	If the answer is correct then an encouraging message appears for about one second and then the question is hidden and the next question loads

•	If the answer is wrong, a new feedback view should provide a short explanation for what the correct answer is. A button that says “OK got it” is shown to go to the next question

•	The process of feedback for the questions should continue until the user finishes the quiz

•	At the end of the quiz, the student should receive a message in a separate view saying: “Congratulations <student name>! You pass the quiz” if the student scores more than 80% and sorry if the student scores below 80%. 
  
•	After completing the quiz. The user gets the option to retake the quiz or return to the main page.

•	Static back-end API: Your application should retrieve all quiz information and quiz questions from a remote API. You must use the JSONPlaceholder server which allows you to build fake online REST API for testing and prototyping.

•	Each online quiz instance should include at least twenty unique questions. The question must be create by you. They must be real meaningful question and appropriate correct answer and illustrations (i.e. do not use lorem ipsum or question placeholders).

•	The question must relate to computer science or a programming quiz; for example, you can have questions about a programming language such as java, JavaScript, C/C++, python, rust, php; or a programming framework etc.

•	Your application must be a single-page applications (SPA).

•	You must style your applications using Bootstrap and CSS. Your design must be unique, responsive and visually appealing.

•	Your application must be deployed on the Netlify hosting platform (https://www.netlify.com/)and must be accessible through the web

•	During the quiz, a scoreboard should keep track and display the number of questions answered so far, as well as, the elapsed time and the total score


# Project Features/Requirements Implemented:
•	User will be asked to provide their names and quiz selection via input form

•	After name and quiz selection are inputted, the quiz should begin

•	Quiz should appear in a separate view within your application

•	Quiz information will be load asynchronously from a static rest API endpoint 

•	After an answer is submitted, the answer is evaluated whether correct or wrong and feedback should be provided

•	If the answer is correct then an encouraging message appears for about one second and then the question is hidden and the next question loads

•	If the answer is wrong, a new feedback view should provide a short explanation for what the correct answer is. A button that says “OK got it” is shown to go to the next question

•	The process of feedback for the questions should continue until the user finishes the quiz

•	Static back-end API: Your application should retrieve all quiz information and quiz questions from a remote API. You must use the JSONPlaceholder server which allows you to build fake online REST API for testing and prototyping.

•	The question must relate to computer science or a programming quiz; for example, you can have questions about a programming language such as java, JavaScript, C/C++, python, rust, php; or a programming framework etc.

•	Your application must be a single-page applications (SPA).

•	You must style your applications using Bootstrap and CSS. Your design must be unique, responsive and visually appealing.

•	Your application must be deployed on the Netlify hosting platform (https://www.netlify.com/)and must be accessible through the web

# Project Features Not implemented:

•	Each quiz includes different types of questions: multiple choice, fill-in, etc.

•	Each question will show one at a time and an appropriate interface will be shown for each question [Only implemented multiple Choice questions. Was attempting to have questions with images.]

•	At the end of the quiz, the student should receive a message in a separate view saying: “Congratulations <student name>! You pass the quiz” if the student scores more than 80% and sorry if the student scores below 80%. [The next the next step for me was to figure out how to have questions based in images.]
  
•	After completing the quiz. The user gets the option to retake the quiz or return to the main page.

•	Each online quiz instance should include at least twenty unique questions. The question must be create by you. They must be real meaningful question and appropriate correct answer and illustrations (i.e. do not use lorem ipsum or question placeholders). [I put 5 questions for each quiz. They are however related to computer science and programming and are real questions.]

•	During the quiz, a scoreboard should keep track and display the number of questions answered so far, as well as, the elapsed time and the total score. [I tried to find a stopwatch code from an online source/ video but when I tried using their code the timer would not start]

# Deliverable 4.3: Deployment report
## Paragraph on Deployment
  For this project Iused the program Notepad++.I have used this program before for the other assignments and find it very usefulfor doing HTML, CSS, and JavaScript coding. I was able to have all my files for this website open as multiple tabs so Ican cycle through my files quick and make updates very quickly. If irst made an HTML and CSSfile and created a basic format/ structure of the websiteusing Bootstrap. I kept it simple and did not use any crazy colorsor format. Next, I made the JavaScript file and used your 50-minute video to get the “create view” function and “renderwidget” function.For those functions Ineeded to use a JSON filewhich I used to store two quizzes which were arrays that stored question objects. Next,I used the JSON Placeholder website(https://jsonplaceholder.typicode.com/)to create a fake API that would store my file with my quiz data. I would use a get request to get the data and then create my views using Handlebars templating. Handlebars let me make a template view for the quiz questions so that I would not have to rewrite code to do the same thing.
   
   In using JSON placeholder and Handlebars, I was using the AJAX web development techniques on the clientside to create an asynchronous web application. The goal of AJAX is to make your website be separated into parts so that you don’t have to always refresh the entire webpage when you perform an action, and to instead just refresh a certain part or view in our case. In this case, I would refresh the question view and not have to refresh the top header and some static information. Ajax is great to use less megabits when transferring data over the internet.So, I was able to have a working website, but I was not able to implement every use case that was required. I used GitHub to create a repository for all my files for this project and used the commands:git init, git add ., git commit -m”message”, and push, git fetch, git clone, to setup a repository on GitHub, clone it into my computer, and commit/ push files from my pc into the GitHub repository. 
   
   Later in the development of this project I figured out that console.log is a good tool for troubleshooting errors in the code. Lastly, I hosted the website on Netlify. I linked my GitHub account to it and it allowed me to select the repository for this project and be able to make a fake URL that will host my websiteso now I just have to share that linkand other people can see my website run without having to have the files. I had an error with netlify but then I watched a video and told me that I must input the exact folder that had all my html/CSS/JavaScript code in it. One annoying error I had was with JSON Placeholder website. Your JSON file cannot be inside a folder to work and it said that JSONPlaceholder does not work with private repositories, so I made it public and it started to work. Lastly, when updating my application I used Google Chrome to open the HTML file to view my work and right-click inspect to see the console and view any errors in my code.




