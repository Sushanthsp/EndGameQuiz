var readLineSync = require('readline-sync');
const chalk = require('chalk');
var exit = require('exit')
let score = 0 ;

var highScore = [
   {
      name  : 'Navaneeth',
         score : 12
   }
] 

var levelOne= 
[
  {
    p : ['Captain Marvel','Captain America','Peter Quill','Thor'],
    q : 'What character saves Tony Stark from space? ',
    a : 'Captain Marvel'
  },
  {
    p: ['Drax and Mantis','Nebula and Rocket','Peter and Gamora','Rocket and Groot' ], 
    q : 'What Guardians of the Galaxy characters were left after the snap? ',
    a : 'Nebula and Rocket'  
  },
  {
    p: ['Iceland','Sweden','Norway','Denmark'],
    q : 'Where did Thor settle down with the rest of the Asgardians after the initial snap? ',
    a : 'Norway'  
  },
  {
    p: ['A storage facility','The middle of the ocean','A rooftop','An underground warehouse'],
    q : 'Where did Ant-Man end up after returning from the Quantum Realm?',
    a : 'A storage facility'  
  },
  {
    p: ['Starting a new family',	'Traveling to other planets',
              'Spending time with Black Widow','Becoming a vigilante'],
    q : 'What was Hawkeye doing in the five-year time span 					while the Avengers were adjusting to the loss? ',
    a : 'Becoming a vigilante'  
  },
]

var levelTwo = 
[
  {
    p: ['Melody','Morgan','Megan','Margaret'],
    q : 'What is the name of Iron Man’s daughter?',
    a : 'Morgan'  
  },
  {
    p: ["He didn't want to lose again",'He was getting too old','Pepper asked him not to',"He didn’t want to jeopardize his family life"],
    q : 'Why was Tony Stark reluctant to help the team build the time machine? ',
    a : 'He didn’t want to jeopardize his family life'  
  },
    { p: ['YThanos sent them a message','Captain Marvel stumbled upon it','Thanos used the Infinity Stones a second time','Tony Stark invented a tracking device'],
    q : 'After reuniting with Tony and Nebula, how did the team track down Thanos? ',
    a : 'Thanos used the Infinity Stones a second time'  
  },
    { p: ['Iron Man','Gamora','Captain Marvel','Thor'],
    q : 'Who was responsible for ending Thanos after the team found him on the uninhabited planet? ',
    a : 'Thor'  
  },
    { p: ['Svartalfheim','Asgard','New York','Sakaar'],
     q : 'Where did Thor and Rocket travel to find the Reality Stone? ',
     a : 'Asgard'  
  }
]

var levelThree = 
[
   {
     x:['Black Widow','Iron Man',	'Captain America','Hawkeye'],
       y:'Who made the ultimate sacrifice so the team could retrieve the Soul Stone?',
     z:'Black Widow'
   },
   {
     x:['Captain America was tricked into aiding him','Thor helps him','Using the Tesseract','Ant-Man creates a diversion'],
       y:'In the alternate past timeline, how does Loki escape captivity?',
     z:'Using the Tesseract'
   },
   {
     x:[2017,2000,2009,2012],
       y:'What year did Tony, Steve, Bruce, and Scott travel to in order to retrieve three of the Infinity Stones?',
     z:2012
   },
   {
     x:['Present-Nebula wanted to make amends with her father','Gamora traveled through time and learned their secrets','Past-Nebula and Present-Nebula’s communications were linked','War Machine seeks Thanos out for revenge and tells him their plan'],
       y:'How did past-Thanos discover the Avengers present-time plan?',
     z:'Past-Nebula and Present-Nebula’s communications were linked'
   },
   {
     x:['Himself','Loki','Iron Man','Nick Fury'],
       y:'Who did Captain America fight to retrieve the Mind Stone?',
     z:'Himself'
   }
]

function levelExit()
{	
       var ext = readLineSync.question(chalk.underline.bold.whiteBright('press "E" or "e" to exit or any other key to continue '))
    if(ext === 'E' || ext === 'e')
      {
        console.log(chalk.bold.red('You made an exit'))
        exit();
    }
} 

function welcome()
{
           var name = readLineSync.question('Your name is?? ')
           console.log(chalk.bold.italic.cyan('Welcome ') + chalk.bold.italic.cyanBright(name) +  chalk.bold.italic.cyan(" to this fun quiz"))
           levelExit()
}

function quiz(x , q, a)
{
    var arr = x ;
      var col = chalk.bold.yellowBright(q) ;
    var y = readLineSync.keyInSelect(arr, col )
    if(arr[y] === a )
   {
     score+= 1;
     console.log(chalk.green("YAY!! You are right"))
     console.log(chalk.green("Your score is ") + chalk.bold.greenBright(score ) )
   }
     else 
   { 
     console.log(chalk.red("You are wrong"))
         console.log(chalk.green.bold('Right anser is : ')+ chalk.green.bold(a))
     console.log(chalk.red("Your score is " )+ chalk.bold.redBright(score ))
   }
}

function finalScore()
{
       console.log(chalk.bold.italic.cyan("Your final score is " + score ))
   console.log(chalk.bold.cyanBright('These is the highest score till now, and if you have crossed this mark then ping me and send the screenshot of your score'))
     highScore.map((a )=>
           {
       console.log(chalk.bold.green(a.name), chalk.bold.yellow(" : ") , chalk.bold.green(a.score))})
       exit();
}

function five()
{
       if(score == 5 )
       {
                console.log(chalk.bold.blackBright.bgGreen('YAY!! you reached level 2'))
              levelExit()
            {
                for(i=0; i< levelTwo.length; i++)
               {
              quiz(levelTwo[i].p, levelTwo[i].q,  levelTwo [i].a )
            }  
         }
     }
       else
       {	
           console.log(chalk.bold.redBright('OOPS! You lost 1st level!!'), chalk.bold.greenBright('Try again!!'))
            finalScore()
       }	
}

function ten()
{
       if(score== 10)
       {
             console.log(chalk.bold.blackBright.bgGreen("YAY!! You reached level 3"))
              levelExit()  
        { 
       for(i=0; i< levelThree.length ; i++)
           {
         quiz(levelThree[i].x,levelThree[i].y,levelThree[i].z)
           }
     }
   }
else
{
            console.log(chalk.bold.redBright('OOPS! You lost 2nd level!!'), chalk.bold.greenBright('Try again!!'))
            finalScore()
}
}

function fifteen()
{
           if(score == 15)
   {
          console.log(chalk.underline.bold.bgGreen.blue('YAY!! You cracked this end game quiz, congrats'))
            console.log(chalk.bold.italic.yellowBright("Plese send me your name to update in  highscore list"  ))
            console.log(chalk.underline.bold.yellowBright('Your total score is '+ score ))
   }
    else
   {
       console.log(chalk.bold.redBright('OOPS! You lost 3rd level!! but it was a good try and now you ')+ chalk.bold.greenBright('Try again!!'))
           finalScore()
   }
}

welcome() 
for(i=0; i< levelOne.length; i++)
{
 quiz(levelOne[i].p, levelOne[i].q,  levelOne[i].a )
}
five()
ten()
fifteen()