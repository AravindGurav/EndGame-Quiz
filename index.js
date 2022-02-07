var readlineSync = require("readline-sync");
var i=0,score=0,count=0,level=1;

var userName=readlineSync.question("What is your Name\n")
console.log("Hi "+"[ "+userName+" ]"+" Welcome to the Game of How well do you know Aravind");
console.log("==============================");
console.log("If you get a score of 5, you will be considered as Aravind's Best Friend and will be taken to the next level of the game");
console.log("==============================");

var delayVariable=readlineSync.question("Respond yes to start the game \n");

questionOne ={
question:"Where does Aravind live currently",
answer:"Bangalore"
}

questionTwo ={
question:"What is Aravind's hobby?",
answer:"Badminton"
}

questionThree ={
question:"Which is the company Aravind is working in?",
answer:"Microsoft"
}

questionFour ={
question:"Which is the company Aravind was previously working in?",
answer:"Accenture"
}

questionFive ={
question:"Which is Aravind's favourite pizza brand?",
answer:"Dominos"
}

questionSix ={
question:"what does Aravind like more Pizza or Burger?",
answer:"Burger"
}

questionSeven ={
question:"Which laptop does Aravind have Asus or Hp?",
answer:"Hp"
}

questionEight ={
question:"What does Aravind like Cats or Dogs?",
answer:"Dogs"
}

questionNine ={
question:"Who is Aravind's Best Friend?",
answer:"Prakash"
}

questionTen ={
question:"Where did Aravind study after resigning from Infosys?",
answer:"Qspiders"
}

var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];

function play(question,answer)
{
  var userAnswer=readlineSync.question(question+"\n");
if(userAnswer.toLowerCase()===answer.toLowerCase())
  {
    console.log("Yay!!! You are correct! "+userName);
    console.log("----------------");
    score++;
    if(score>=5)
    {
      level=2;
    }
  }
  
  else 
  {
    console.log("Oops!! you guessed it wrong! "+userName);
    console.log("The correct answer is: "+answer);
    console.log("----------------");

  }
}

for(i=0;i<questions.length;i++)
{
  play(questions[i].question,questions[i].answer);
  count++;
  if(count>2)
  {
    if(count<=9)
    {
    console.log("Do want to continue the game");
    var quit=readlineSync.question("Reply with Yes/No \n");
    }
    if(quit.toLowerCase()==="no".toLowerCase())
    {
      console.log("Your current Level is: "+level);
      console.log("Your current score is: "+score);
      break;
    }
    else if(quit.toLowerCase()==="Yes".toLowerCase())
    {
      continue;
    }
    else
    {
      if(i<questions.length-1)
      {
      console.log("You entered a different answer so please continue with the game and answer correctly next time :p");
      console.log("==================");
      }
      else
      break;
    }
    // if(score>=5&&level==2)
    // {
    //   level++;
    //   console.log("Hurray!!!! You know Aravind very well");
    //   console.log("Welcome to the Level 2 of the game and enjoy the further questions");
    // }
  }
  
}
if(i==(questions.length-1)){
      console.log("Your current Level is: "+level);
      console.log("Your current score is: "+score);
      }
  



