var readLineSync=require('readline-sync');
var chalk=require('chalk')
console.log(chalk.blueBright("---Lets see how much you know about Suits----"));
var name =readLineSync.question(chalk.red("Please enter your name : "));
 
console.log("Hello "+ name +" "+"Lets start \n");
console.log(chalk.yellow("RULE - There are three levels.\n\nLevel 1 - For each correct question you get 1 point.There is no negative marking.If you score more than 5 points you qualify for level 2.\n\nLevel 2 - For each correct question you get 2 points and for each wrong answer you get -1 negative marks.If you score more than 6 points.You qualify for level 3. \n \nLevel 3 - For each correct question you get 5 points.For each wrong answer you lose 5 points. "));

var level1=[
 {
   question :"The firm hires graduates from which college?",
   choices:['Columbia','Harvard','Stanford','Yale'],
   answer:2
 },
 {
   question:"Mike ross graduated from which law school?",
   choices:['Harvard','Columbia','Yale','None'],
   answer:4
 },
 {
   question:"Who is Harvey's Assistant?",
    choices:['Donna','Rachel','Catherine','Amy'],
   answer:1,
 },
 {
   question:"Mike ross is engaged to whom?",
    choices:['Donna','Jenny','Rachel','Anita'],
   answer:3,
 },
 {
   question:"Louis is in rivalry with whom?",
    choices:['Mike','Donna','Jessica','Harvey'],
   answer:4,
 },
 {
   question:"Whose father is named partner in competing firm? ",
    choices:['Donna','Rachel','Jesica','Harvey'],
   answer:2,
 },
 {
   question:"Which partner loves mudding and had a cat named Bruno?",
    choices:['Harvey','Daniel','Louis','Jessica'],
   answer:3,
 },
 {
   question:"What is Louis Litt's favourite catchphrase?",
    choices:['We Litt a fire under them!','LITigation for all!','You just got Litt Up!','Im the Litt-man!'],
   answer:3,
 },
 {
   question:"What is harvey spector's middle name",
    choices:['Reginald','Zane','Michael','Scott'],
   answer:1,
 }
 ];

var level2=[
 {
   question :"Who plays mike ross?",
   choices:['WoodSide','Jhonny','Patrick','Sam'],
   answer:3
 },
 {
   question :"Who told Jessica Pearson that Mike did not have the required qualifications to become a lawyer at the end of season 1?",
   choices:['Rachel Zane','Jenny Griffith','Trevor Evans','Harvey Specter'],
   answer:3
 },
 {
   question :"What kind of genre is Suits TV series?",
   choices:['Comedy','Legal','Fictional','Adventure'],
   answer:2
 },
 {
   question :"How many seasons are there in the series?",
   choices:['5','10','8','7'],
   answer:3
 },
  {
   question :"What was Rachel's final LSAT score?",
   choices:['182','172','192','183'],
   answer:2
 },
  {
   question :"What does Harvey whisper when Louis hugs him after recovering from a heart attack?",
   choices:['go away','help me','you are awesome','hello'],
   answer:2
 },
];

var level3=[
  {
    question :"What is the name of Nigel's cat? ",
    choices:['Mikado','Donald','Steffy','Candy'],
   answer:1,
  },
  {
    question :"What kind of Memory Mike has ?",
    choices:['Iconic Memory','Eidetic Memory','Haptic Memory','Short Term Memory'],
   answer:2,
  },
  {
    question :"Both harvey's parents died of what?",
    choices:['Accident','Heart Attack','Suicide','Brain Damage'],
   answer:2,
  },
  {
    question :"Who is firm's expert in financial matter",
    choices:['Louis Litt','Rachel Zane','Harvey','Mike Ross'],
   answer:1,
  },
  {
    question :"What car does Stephen Huntley drive?",
    choices:['BMW','Mercedes','Mordan','Aston Martin'],
   answer:4,
  }
]
let highscore=[
  {
  name:'Sam',
  score:40
  },
  {
  name:'Anjali',
  score:38
  }
];


function playLevel(level,score)
{
for(var i=0;i<level.length;i++)
{
  console.log(chalk.cyan.bold(level[i].question));
   userAnswer =readLineSync.keyInSelect(level[i].choices,"Choose option ");

  if(userAnswer+1===0)
  {
    return -1;
  }
  else
  {
    if((userAnswer+1)===level[i].answer)
    {
      console.log(chalk.green("CORRECT"));
      if(level===level1)
      {
      score++;
      }
      else if(level===level2)
      {
        score+=2;
      }
      if(level===level3)
      {
        score+=5;
      }
    }
    else
    {
      console.log(chalk.red("FALSE"));
      if(level===level2)
      {
        score--;
      }
      else if(level===level3)
      {
        score-=5;
      }
    }
  }
  console.log("\n");
}
var totalScore;
if(level===level1)
{
  totalScore=level.length;
}
else if(level===level2)
{
  totalScore=level.length*2;
}
else if(level===level3)
{
  totalScore=level.length*5;
}
if(score>0)
{
console.log(chalk.red("Your score is "+ score +" out of "+totalScore
 +"\n"));
}
else{
  console.log(chalk.red("Your score is 0 out of "+totalScore
 +"\n"));
}
return score;
}

function showHighscore(score)
{

  for(var i=0;i<highscore.length;i++)
  {
    if(score>highscore[i].score)
    {
      console.log(chalk.green("BRAVO !! You have a high score now.Please send a screenshot to me"));
      break;
    }
  }
  console.log("\n---HIGHSCORES---")
  for(var i=0;i<highscore.length;i++)
  {
    console.log(chalk.yellow(highscore[i].name +" -> "+highscore[i].score));
  }

}


var score1=playLevel(level1,0);
if(score1>5)
{
  console.log(chalk.green("YAY!You qualify for level 2 \n"));
  console.log("Enter 1 - continue or 0 - exit");
  var choice=readLineSync.prompt();
  if(choice == 1)
  {
    console.log(chalk.blueBright("-----WELCOME TO LEVEL 2------\n"));
    var score2 =playLevel(level2,0);
    if(score2>6)
    {
      console.log(chalk.green("YAY!You qualify for level 3\n"));
      console.log("Enter 1 - continue or 0 - exit");
      var choice=readLineSync.prompt();
      if(choice == 1)
      {
        console.log(chalk.blueBright("-----WELCOME TO LEVEL 3------\n"));
        var score3 =playLevel(level3,0);
        var totalScore=score1+score2+score3;
        console.log(chalk.green("Total score from all three levels is "+totalScore));
        showHighscore(totalScore);
      }
      else{
        console.log("Thank you for playing");
      }
    }
    else if(score2==-1)
    {
      console.log(chalk.red("Thank you for playing"));
    }
    else if(score2<=6){
      console.log(chalk.yellow("You dont qualify for level 3.Please try again!!"));
    }
  
  }
  else
  {
    console.log(chalk.red("Thank you for playing"));
  }
}
else if(score1 ==-1)
{
  console.log(chalk.red("Thank you for playing"));
}
else if(score1<=5){
  console.log(chalk.yellow("You dont qualify for level 2.Please try again!!"));
}
