# Quiz-app
Start using GitHub

A JavaScript quiz web application (also used HTML and CSS) that will function as follows:
-It has a radio button choices and it show how much questions we have at all, and position of current question;
-The quiz can show any number of questions and any number of choices;
-It show users score after answering last question and suggers to user try again.

-We used an array to store all the questions. 
Each question, along with its choices and correct answer, stored in an object.
The array of questions look similar to this 
(Notice that only one question is in this example array; you can add many questions):
var allQuestions = [{question: "Who is Prime Minister of the United Kingdom?", 
                    choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
                    correctAnswer:0}];
