# CUS1172_Spring2020_Kamil_Peza

# Project 4: Individual Project (Milestone 1)

# CUS 1172

# Spring Semester 2020

# Kamil Peza



# -------------Kamil Peza [Completion Report]----------------

# COVER PAGE

# Project 4: Individual Project (Milestone 1)

# Deliverable 4.2: Source code release report

# Course Number: CUS1172

# Spring Semester 2020

# Project Requirements:



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



