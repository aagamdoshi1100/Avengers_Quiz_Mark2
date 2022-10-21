var readlinesync = require('readline-sync');

console.log("Avenger Quiz");
var score = 0;

var UserInputToEnterToGame = readlinesync.question("Press '1' to continue: ");

if (UserInputToEnterToGame != 1) {
  console.log("");
  console.log("Bye Bye!");

} else {


  AvengersLevelOne = [{
    Question: "How many Infinity Stones are there? ",
    MCQ: "A : 1  B: 3  C: 5 ",
    Answer: "C",
  }, {
    Question: "Who is Tony Stark’s father? ",
    MCQ: "A : Howard Stark  B: Brooklyn  C: Lionel typerson ",
    Answer: "A",
  }, {
    Question: "What type of doctor is Doctor Strange? ",
    MCQ: "A : Ayurvedic  B: neurosurgeon  C: Homopathic ",
    Answer: "B",
  },]

  AvengersLevelTwo = [{
    Question: "Who was able to pick up Thor’s hammer in Endgame? ",
    MCQ: "A : Antman  B: Black Panther  C: Captain America ",
    Answer: "C",
  }, {
    Question: "Captain America’s shield and Bucky's arm are made of what? ",
    MCQ: "A : Graphite  B: Vibranium  C: Stainless steel ",
    Answer: "B",
  }, {
    Question: "Black Panther is set in which fictional country? ",
    MCQ: "A : Wakanda  B: Omir  C: Dioana ",
    Answer: "A",
  },]

  AvengersLevelThree = [{
    Question: "What is Tony Stark's daughter's name? ",
    MCQ: "A : Monica Stark  B: Morgan stark  C: Setrica ",
    Answer: "B",
  }, {
    Question: "Nick Fury wears an eye patch over which eye?  ",
    MCQ: "A : Left   B: Right  C: Both ",
    Answer: "A",
  }, {
    Question: "Thor played what video game in Avengers: Endgame? ",
    MCQ: "A : PUBG  B: Fortnite  C: HelloG ",
    Answer: "B",
  },]

  console.log("");

  console.log("Welcome to the level 1");

  console.log("");

  for (i = 0; i < AvengersLevelOne.length; i++) {

    var scanning = AvengersLevelOne[i];
    var Question = scanning.Question;
    var MCQ = scanning.MCQ;
    var Answer = scanning.Answer;

    LevelOne(Question, MCQ, Answer)

  }


  function LevelOne(Question, MCQ, Answer) {

    console.log(Question);
    console.log(MCQ);
    console.log("");

    var UserInput = readlinesync.question("Your response : ");

    if (Answer === '5') {
      Answer = 'C';
    } else if (Answer === 'Howard Stark') {
      Answer = 'A';
    } else if (Answer === 'neurosurgeon') {
      Answer = 'B';
    }



    if (UserInput.toUpperCase() === Answer) {
      console.log("");
      score = score + 1;
      console.log("Correct");
      console.log("You Score is ", score);
      console.log("");
    } else {
      score = score - 1;
      console.log("Wrong");
      console.log("You Score is ", score);
    }
  }

    if (score === 3) {

      console.log("---------------Welcome to the level 2------------------")
      console.log("");


  for (i = 0; i < AvengersLevelTwo.length; i++) {

    var scanning = AvengersLevelTwo[i];
    var Question = scanning.Question;
    var MCQ = scanning.MCQ;
    var Answer = scanning.Answer;

    LevelTwo(Question, MCQ, Answer)

  }

  function LevelTwo(Question, MCQ, Answer) {

    console.log(Question);
    console.log(MCQ);
    console.log("");

    var UserInput = readlinesync.question("Your response : ");
    if (Answer === 'Captain America') {
      Answer = 'C';
    } else if (Answer === 'Vibranium') {
      Answer = 'B';
    } else if (Answer === 'Wakanda') {
      Answer = 'A';
    }


    if (UserInput.toUpperCase() === Answer) {
      console.log("");
      score = score + 1;
      console.log("Correct");
      console.log("You Score is ", score);
      console.log("");
    } else {
      score = score - 1;
      console.log("Wrong");
      console.log("You Score is ", score);
    }
  }

    } else {
      console.log("Failed to cross level 1");
      console.log("Better luck next time");
    }




    if (score === 6) {

      console.log("---------------Welcome to the level 3------------------")
      console.log("");


  for (i = 0; i < AvengersLevelThree.length; i++) {

    var scanning = AvengersLevelThree[i];
    var Question = scanning.Question;
    var MCQ = scanning.MCQ;
    var Answer = scanning.Answer;

    LevelThree(Question, MCQ, Answer)

  }

  function LevelThree(Question, MCQ, Answer) {

    console.log(Question);
    console.log(MCQ);
    console.log("");

    var UserInput = readlinesync.question("Your response : ");
    if (Answer === 'Morgan stark') {
      Answer = 'B';
    } else if (Answer === 'Left') {
      Answer = 'A';
    } else if (Answer === 'Fortnite') {
      Answer = 'B';
    }


    if (UserInput.toUpperCase() === Answer) {
      console.log("");
      score = score + 1;
      console.log("Correct");
      console.log("You Score is ", score);
      console.log("");
    } else {
      score = score - 1;
      console.log("Wrong");
      console.log("You Score is ", score);
    }
  }
      console.log("Congratulation! Your final score is ", score);
      console.log("You won this game ");

      console.log("");
      High();

    } else {
      console.log("Failed to cross level 2");
      console.log("Better luck next time");
      High();
    }


    function High(){
      console.log("");
      console.log("---------------Highscores------------------------");
      console.log("");

      var HighScores = [
  {
    name: "Aagam",
    score: 9,
  },

  {
    name: "Parth",
    score: 9,
  },
]
       console.log("Take a screenshot share score to the delveloper to update your score ");
      console.log("");
for (i = 0; i < HighScores.length; i++) {

    var scanning = HighScores[i];
    var Name = scanning.name;
    var scoreb = scanning.score;
  
   
  console.log("Name: ",Name);
  console.log("Score: ",scoreb);
  console.log("");

  }
    }   

  }

console.log("To play gain go to https://replit.com/@AagamDoshi2/AvengersQuizMark2?embed=true#index.js")
