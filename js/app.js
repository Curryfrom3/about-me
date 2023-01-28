'use strict';


let username = prompt('What is your name?');



alert('Hello! ' + username + ' Before I let you on the sight lets play a 5 question game.');

let score = 0;

function q1() {
  let DoILikeRickandMorty = prompt('Do I Like Rick and Morty? Yes or No?').toLowerCase();

  if (DoILikeRickandMorty === 'yes' || DoILikeRickandMorty === 'y') {
    score++;
    alert('You are correct! I do like Rick and Morty! ');

  } else if (DoILikeRickandMorty === 'no' || DoILikeRickandMorty === 'n') {

    alert('You are incorrect I do like rick and Mory');
  } else {
    alert('Please Answer Yes or No!');
  }
}

q1();

function q2() {
  let DidIserveintheMilitary = prompt('Did I serve in the Military? Yes or No?').toLowerCase();

  if (DidIserveintheMilitary === 'yes' || DidIserveintheMilitary === 'y') {
    score++;
    alert('You are correct! Hooyah Navy!');
  } else if (DidIserveintheMilitary === 'no' || DidIserveintheMilitary === 'n') {

    alert('You are incorrect I served in the U.S Navy!');

  } else {
    alert('Please Answer Yes or No!');
  }
}

q2();

function q3() {
  let HaveIevercompletedafullgameofMonopoly = prompt('Have I ever completed a full game of Monopoly?').toLowerCase();

  if (HaveIevercompletedafullgameofMonopoly === 'yes' || HaveIevercompletedafullgameofMonopoly === 'y') {
    alert('Sorry I have actually never completed a game of monopoly.');
  }
  else if (HaveIevercompletedafullgameofMonopoly === 'no' || HaveIevercompletedafullgameofMonopoly === 'n') {
    score++;
    alert('You are correct! I should try to finish some day.');

  } else {
    alert('Please Answer Yes or No!');
  }
}
q3();

function q4() {
  let DidIgotocollege = prompt('Did I go to college? Yes or No?').toLowerCase();

  if (DidIgotocollege === 'yes' || DidIgotocollege === 'y') {
    score++;
    alert('You are correct! I attended college after the Navy.');
  }
  else if (DidIgotocollege === 'no' || DidIgotocollege === 'n') {

    alert('You are incorrect! I did attend college.');
  } else {
    alert('Please Answer Yes or No!');
  }
}
q4();

function q5() {
  let DoIenjoycoding = prompt('Do I enjoy coding? Yes or No?').toLowerCase();

  if (DoIenjoycoding === 'yes' || DoIenjoycoding === 'y') {
    score++;
    alert('You better believe it! I love to code!');
  }
  else if (DoIenjoycoding === 'no' || DoIenjoycoding === 'n') {

    console.log('Sorry thats incorrect. I actually enjoy coding.');
    alert('Sorry thats incorrect. I actually enjoy coding.');
  } else {
    alert('Please Answer Yes or No!');
  }
}
q5();

function q6() {
  let numberinput = parseInt(prompt('Guess a number between 1 - 10 '));
  let x = 5; //my number
  let i = 4; //attempts remain
  while (i > 0) {
    if (numberinput === x) {
      score++;
      alert('You Guessed it! Hoo!, you was right');
      break;
    }
    else if (numberinput < x) {
      i--;
      numberinput = parseInt(prompt(`too low try guessing higher. you have ${i} tries remaining`));
    }
    else if (numberinput > x) {
      i--;
      numberinput = parseInt(prompt(`too high! try guessing lower. you have ${i} tries remaining`));
    }
    else {
      i--;
      numberinput = parseInt(prompt(`Enter a numeric value between 1-10 please. You have ${i} tries left.`));
    }
    if (i === 0) {
      alert('you have exhausted all attempts. The correct answer is 5.');
    }
  }
}
q6();

function q7() {
  let possibleAnswers = ['Jacksonville', 'Seattle', 'Bremerton', 'Everett', 'Great Lakes', 'Silverdale'];
  let userAttempts = 6;

  alert(`What are the possible cities that I have lived in? You have ${userAttempts} attempts remaining.`);

  for (let i = 0; i < userAttempts; i++) {
    let userGuess = prompt(`What are the possible cities that I have lived in? You have ${userAttempts - i} attempts remaining.`);
    if (possibleAnswers.includes(userGuess)) {
      score++;
      alert(`Congratulations! You guessed it! The possible cities that I have lived in are: ${possibleAnswers.join(', ')}`);
      break;
    }
    if (i === userAttempts - 1) {
      alert(`Sorry, you have exhausted all your attempts. The possible cities that I have lived in are: ${possibleAnswers.join(', ')}`);
    }
  }
}
q7();

alert('Hello! ' + username + ' Your final score is: ' + score + ' out of 7');
