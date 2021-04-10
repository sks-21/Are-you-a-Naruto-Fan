var readlineSync = require('readline-sync');

var userName = readlineSync.question('Enter your name \n')

console.log(`${userName}, Welcome to the Naruto Quiz\n 
The game is of two levels\n
Score more than 50% in level 1 and move to the Final Level!`);
console.log("-----------");

let score=0,highestScore=9;

function display(qn,rightAnswer)
{
  let userAns= readlineSync.question(qn);
  if(userAns === rightAnswer)
  score++;

  console.log("-----------");
}


const arr = [
  {
    question:"Which of these is another word for ninja? \na.Genjutsu \nb.Shinobi \nc.Gelato \nd.assasin\n",
    answer:"b"
  },
   {
    question:"How many tails does Kurama have? \na.8 \nb.4 \nc.6 \nd.9\n",
    answer:"d"
  },
   {
    question:"What is the forbidden technique used by Rock Lee that he used on Dosu and Gaara? \na.Shadow Lotus \nb.Primary Lotus \nc.Lotus of Destruction \nd.Fiery Lotus\n",
    answer:"b"
  },
   {
    question:"Naruto first shows his nine-tails chakra when he fights who?  \na.Neji Hyuuga \nb.Sasuke Uchiha \nc.Gaara \nd.Haku\n",
    answer:"d"
  },
   {
    question:"What is the village where Naruto lives called?\na.Sunagakure \nb.Kyuubigakure \nc.Konohagakure \nd.Uzamagakure\n",
    answer:"c"
  },
   {
    question:"Which of these is NOT a member of the Nara clan? \na.Jiraiya \nb.Yoshino \nc.Shikaku \nd.Ensui\n",
    answer:"a"
  },
   {
    question:"How did Hidan die? \na.He was trapped in Shadow Posession Jutsu while Ino and Choji killed him \nb.His own god betrayed him \nc.He was starved \nd.He can't die\n",
    answer:"d"
  },
   {
    question:"The Sharingan is what type of jutsu? \na.Genjutsu \nb.Taijutsu \nc.Dojutsu \nd.Ninjutsu\n",
    answer:"c"
  },
   {
    question:"How many ninja from Konoha went on to the third stage(after the preliminairies) of the Chunin Exams? \na.four \nb.five \nc.six \nd.three\n",
    answer:"b"
  },
  {
    question:"Which friend died during the Fourth Great War?\na.Neji \nb.Hinata \nc.Choji \nd.Shikamaru\n",
    answer:"a"
  }
];


for(var i=0; i<arr.length ; i++)
{
  if(i==4 )
  {
    if(score<3){
  console.log(`Sorry,You could not qualify to next level!`)
  break;
    }
    else
    console.log("Welcome to the Final level!");
    console.log("-----------"); 
}
  display(arr[i].question, arr[i].answer);
}

if(score<3)
console.log(`Your score is: ${score}/4`)

else if (score >= highestScore)
console.log(`Congratulations! You have the highest score: ${score}/10 `)

else
console.log(`YAY! You scored: ${score}/10 `)