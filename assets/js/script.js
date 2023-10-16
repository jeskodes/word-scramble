/* jshint esversion:8 */

/*Based on Udemy Tutorial by Laurence Svekis.
"JavaScript Create 5 Fun Word Games"
https://www.udemy.com/course/javascript-games/learn/lecture/22686281?start=120#content
"EDIT" indicates where additions or changes have been made*/

//Variables

//Main game area

//EDIT: remove const myWords = [""] (words to be scrambled) and created separate file. 

const gameArea = document.getElementById('game-area');

const title = document.getElementById('heading-wordscramble');

//Start and next word button
const btn = document.createElement('button');

//Scrambled and unscrambled word area
const output = document.createElement('div');

//Textarea - input guess
const inWord = document.getElementById('input-word');

//Score
const scoreBoard = document.createElement('div');

//EDIT Add restart button and function.
const restart = document.createElement('button');//EDIT Add refresh button

//EDIT Add rules to start of game.
let rules = document.getElementById('rules');

//EDIT Add maxGuesses to count guesses and stop at 5.  
let maxGuesses = ''; 
inWord.setAttribute('type', 'text');

/*Settings for start of game. EDIT changed from const to let as will change throughout game.
game.sel = randomised word from array
game.scramble = scrambled word*/
let game = {
    sel: '',
    scramble: '',
    score: 0,
    incorrect: 0,
    maxGuesses: 0, //Edit - add maxGuesses so game over after 5 guesses. 
    played: myWords.length
};

/*Show score throughout game play. 
EDIT: added classname to scoreBoard so can style*/
scoreBoard.textContent = "Score";  //EDIT: removed "Score in html"
scoreBoard.classList.add("div-scoreboard");

//EDIT: add class to btn to style in css
btn.textContent = "START GAME";
btn.classList.add("btn-start");

//EDIT: add class to output so can style 
output.classList.add("div-played-words"); 

//EDIT: create, add and style restart button and function
restart.id = "btn-refresh";
restart.textContent = "Restart"; 
document.body.appendChild(restart);
console.log(restart); //test restart button 

// Add to HTML page using append. 
gameArea.append(title); //EDIT: Added a title and appended. 
gameArea.append(scoreBoard); //EDIT: Moved position of scoreboard.
gameArea.append(output);
gameArea.append(inWord);
gameArea.append(btn);
gameArea.appendChild(restart); //EDIT append restart button.

//Hide scoreBoard, textarea, scrambled word and refresh at start of game
scoreBoard.style.display = 'none';
inWord.style.display = 'none';
restart.style.display = 'none';
output.style.display = 'none';
console.log(btn);

//EventListeners

//EDIT: Add restart button and EventListener to refresh game.  
restart.addEventListener("click", (e) => {
    window.location.reload();
})

restart.addEventListener("keypress", (e) => {
    window.location.reload();
}) 

//EDIT - separated out EventListener and created gamePlay function for more flexibility. 
btn.addEventListener('click', (gamePlay));  

function gamePlay(){
    if (myWords.length <= 0 || (maxGuesses === 5)){ //EDIT: Add in "or" maxGuesses for game over.  
        console.log('game over');
        console.log(maxGuesses);
        gameArea.innerHTML = `<div class = "div-gameover">Game Over</div>`;
        gameArea.innerHTML += `<div class = "div-gameover"> Score ${game.score} out of 5 </div>`;//EDIT Changed so that will always say out of 5
        restart.style.display = 'block';
        gameArea.appendChild(restart); //EDIT add refresh button
        restart.textContent = 'Play Again';
        rules.style.display = 'none';
        
    } else { //EDIT from tutorial - removed words "correct/incorrect" replaced with icons.
        scoreBoard.style.display = 'block';
        inWord.disabled = false; //refresh word 
        inWord.value = ""; //clear input box on click 
        btn.style.display = "none"; //button disappears when click start
        output.style.display = 'block';//EDIT hide output variable before start game then make visible. 
        scoreBoard.style.display = 'block';
        inWord.style.display = 'block';
        restart.style.display = 'block';
        rules.style.display = 'none';
        myWords.sort(() => {
            return 0.475 - Math.random()
        });
        // Randomise Array; attempted to replace with Fisher-Yates shuffle - unsuccessful. 



        game.sel = myWords.shift();
        /*EDIT: removed how many words left - too wordy. 
        game.scramble: passing scrambled word into sorter function check is scrambled.*/
        game.scramble = sorter(game.sel);
        game.wordsLeft = myWords.length; //how many words left
        // output.style.fontSize = "3rem";
        // output.style.padding = "5px 5px";
        // output.style.borderRadius = "5px"; //Edit didn't change border
        output.style.backgroundColor = "#DEEFF5"; 
        inWord.setAttribute('maxlength', game.sel.length);
        inWord.focus(); //adds focus to input field 
        inWord.style.borderColor = "black";
        output.textContent = `${game.scramble}`;
        console.log(game.sel, game.scramble);
    }
}


//Add letter count using EventListener
//the function will check to see what the length of the inWord input is
//everytime press in textbox get value 1 - length of word
//keyup counts key presses 
//counting because once reach same number of letters for word will do check 
//to see if word matches the word. 
//e.code means event.code - if press enter
//so if reach same number of letters or if press enter will check if matches word. 

inWord.addEventListener('keyup', (e) => {  //make more accessible if change from 'keypup' to 'click'
    // console.log(e); removed - used for debugging
    // inWord.style.borderColor = "#000000"; //reset border color to default
    // inWord.style.borderWidth = "2px"; //keep border width same throughout game play
    if (inWord.value.length === game.sel.length || e.code == "Enter") {
        winChecker(); //runt the winChecker function 
    } 
})



//if (inWord.value.length == game.sel.length && e.code == "Enter") { changed 
// from or to and - to change back. 
// btn.addEventListener ('keyup', (e) => {
//     if (e.key === "Enter" || e.code === "Enter")
//         document.getElementsByTagName('btn-start').click(); { 
//         winChecker(); 
//         console.log('enter was pressed'); 
//     }
// })



//create a function to output the score on the gameplay
//Used template literal to assign value of the score
//tempOutput is what will output to scoreboard. 
//innerHTML more flexibility than textContent


//Edit: Did not add html how many words left
function addScore() {
    let tempOutput = `${game.score} <i class="fa-solid fa-square-check"></i>  ${game.incorrect} <i class="fa-solid fa-square-xmark"></i>`;
    scoreBoard.innerHTML = tempOutput;
}

//run check to see if words are matching
//changing border width when checking making word shift - keep border same width throughout
//Edit: original used borderWidth to signify if correct - made word above move. Style background color instead. 
//Update score whenever checking the winner. If get it correct then want to increase if statement if incorrect same with else
//use game.score++ the addScore() to update score within same function as checking correct/incorrect. 
//if correct btn will display again to click for next word. Would prefer press enter for next word. 
//In winChecker function once played need to reenable new word to guess. 
//reenable new word by goint to btn.addEventListener function and setting inWord.disabled to false. 




function winChecker() {
    if (inWord.value.toLowerCase() == game.sel) {  //Edit: added .toLowerCase() - so makes no difference if start word with capitals
        // inWord.style.backgroundColor = "green"; //Edit: will change but better than changing border width. 
        game.score++;
        maxGuesses++; //attempting to count number of guesses - currently not defined. 
        console.log(maxGuesses);
        console.log(game.sel); //testing got right part to print
        inWord.disabled = true; //stop player entering correct score indefinitely. 
        inWord.style.display = "none"; //EDIT: set input to disappear when correct to make room for button - stop moving around -look slicker. 
        output.style.backgroundColor = "#b9ecdc";
        btn.style.display = "block";
        btn.textContent = "Click for next word";
        restart.style.display = 'block'; 
        output.textContent = `${game.sel}`; //EDIT: When guess right the ouput myWord unscrambles. 
        } else {
        console.log("Incorrect"); //if incorrect clear out in.Word value so user cont. 
        inWord.value = "";
        inWord.focus();
        output.style.backgroundColor = "pink"; //EDIT changed background color of output not inWord
        // inWord.style.backgroundColor = "red"; //Edit: will change but better than changing border width.
        maxGuesses++; //attempting to count maxGuesses - currently not defined
        console.log(maxGuesses);
        game.incorrect++;
        inWord.style.display = "none"; //EDIT: copied from above so can't enter correct word
        btn.style.display = "block"; //EDIT: copied from above 
        btn.textContent = "Click for next word"; //EDIT: move onto next word
        output.textContent = `${game.sel}`; //EDIT: If guesses incorrect then says what word was. 
    }

    addScore();

}





//Function continues to run until the word is scrambled
function sorter(val) {
    let temp = val.split('');
    temp.sort(() => {
        return 0.5 - Math.random()
    });
    temp = temp.join('');
    console.log(temp);
    //Check new word not same as previous word
    if (val === temp) {
        console.log(val, temp);
        return sorter(val);
    }
    return temp;
}

        //scramble word letters using .split and turning into an array
        //to put word (temp) back into a string use temp.join()method
        //Edit: changed and added output style - padding, fontSize, borderRadius
        //Need to remove word already guessed from array using .shift()method.


// Learning to do: random sort, template literals. 

// First randomise the word using Math.randon() then make the word
// into an array and use split()method and randomise the new array. 


//EDIT: I would like the new word to automatically appear or to appear on either click or enter. 
//the new word button needs tabbing to before click enter. 
//start looking into with https://css-tricks.com/when-a-click-is-not-just-a-click/
// Add in event listener - listening for presses on the btn.
// the button is a useable object. 
// The event object - can write out as function ?(e)=>{}
// next want to randomise the array
// see https://www.w3schools.com/js/js_array_sort.asp
// will then move on to randomising letters

// const correctWord = myWords.game.sel; 
// // console.log(correctWord);

//Fisher-Yate shuffle algorithim
// function shuffle(myWords) {
//     for (let i = myWords.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [myWords[i], myWords[j]] = [myWords[j], myWords[i]];
//     }
//     return myWords;
//   }



// function allowOnlyLetters(e) {
//     if (e.which <= 90 && e.which >= 48 || e.which >= 96 && e.which <= 105) {
//       return true;
//     } else {
//       alert("Please enter only alphabets");
//      return false;
//      }
//   };


//https://www.kodeclik.com/how-to-scramble-a-word-in-javascript/ how to scramble a word in javascript


//https://www.w3schools.blog/letters-alphabets-validation-javascript-js
//Need to update html too. 
// function lettersOnlyCheck(inputtext) {
// var regEx = /^[A-Za-z]+$/;
//     if(inputtext.value.match(regEx)){
//     return true;
// }   else {
//     alert("Please enter letters only.");
//     return false;
//     }
// }