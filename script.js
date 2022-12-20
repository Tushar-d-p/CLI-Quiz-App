var readlineSync = require("readline-sync");

var Userscore = 0;

var Sushilscore=2;

var Username="";

function welcome(){
  Username = readlineSync.question("Hi!! what's your good name ");
  console.log("Welcome "+ Username+" to Do You Know Tushar");
  console.log("Lets Start ");
}

function play(question, answer)
  {
    var userAnswer = readlineSync.question(question);

    if(userAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log("You are right");
      Userscore++;
    }
    else{
      console.log("You are wrong");
      Userscore--;
    }
  }

//console.log(score);



var questionOne={
  question:"Where do you live ? ",
  answer:"Mumbai",
}

var questionTwo={
  question:"What is your qualification ? ",
  answer:"M.Tech",
}

var questionThree={
  question:"Where do you work ? ",
  answer:"Cerelabs"
}

var array = [questionOne, questionTwo, questionThree];

function game(){
  for(var i = 0; i < array.length; i++)
    {
      var currquestion = array[i];
  
      play(currquestion.question, currquestion.answer);
      
    }
}

function Score ()
  {
    if(Userscore >= Sushilscore)
    {
      console.log("Viola!!! "+ Username+" you won.");
    }
    else{
      console.log("You loose.")
    }
  }

welcome();
game();
Score();