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

/*Letter count EventListener; counts length of word when same as target word will check 
if matches. 
Or will check if matches if player presses Enter to skip*/
/*BUG: EDIT Hid textarea when check match - breaks tab focus
Makes game inaccessible using tab. To fix. */

inWord.addEventListener('keyup', (e) => {  
    console.log(e); 
    if (inWord.value.length === game.sel.length || e.code == "Enter") {
        winChecker(); //run the winChecker function 
    } 
})


function gamePlay(){
    if (myWords.length <= 0 || (maxGuesses === 5)){ //EDIT: Add in "or" maxGuesses for game over.  
        console.log('game over');
        console.log(maxGuesses);
        gameArea.innerHTML = `<div class = "div-gameover">Game Over</div>`;
        gameArea.innerHTML += `<div class = "div-gameover"> Score ${game.score} out of 5 </div>`;//EDIT Changed so that will always say out of 5
        restart.style.display = 'block';
        gameArea.appendChild(restart); //EDIT add refresh button
        restart.textContent = 'Play Again';//EDIT add restart function
        rules.style.display = 'none';
        
        /*Continue Play. 
        EDIT from tutorial - removed words "correct/incorrect" replaced with icons.
        IN FUTURE would separate out game over function and play on function in order 
        to give more flexibility
        IN FUTURE would use a for loop to create temporary array of 
        words played then display score at end showing correct and incorrect words
        guessed using push (), split()
        array.from() method - see https://www.youtube.com/watch?v=NPbDqbwtr-4
        game.sel = myWords /method/(function)*/

    } else { 
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
        game.sel = myWords.shift(); //Remove word already guessed from array. 
        //EDIT: removed text how many words left - too wordy. 
        game.scramble = sorter(game.sel);//Pass scrambled word into sorter function - check scrambled.
        game.wordsLeft = myWords.length; //How many words left
        /*EDIT: Removed syling of textarea and scrambled and unscrambled word
        from js and styled using created classes and CSS */
        output.style.backgroundColor = "#DEEFF5"; //Revert to neutral bg color after guess
        inWord.setAttribute('maxlength', game.sel.length);
        inWord.focus(); //Adds focus to input field 
        // inWord.style.borderColor = "black";
        output.textContent = `${game.scramble}`;
        console.log(game.sel, game.scramble);
    }
}

/*Edit: Removed html how many words left.
Added fontawesome icons instead*/

function addScore() {
    let tempOutput = `${game.score} <i class="fa-solid fa-square-check"></i>  ${game.incorrect} <i class="fa-solid fa-square-xmark"></i>`;
    scoreBoard.innerHTML = tempOutput;
}

/*EDIT: Original used borderWidth of textarea to signify if word correct or incorrect: 
this made the word above move around. 
Styled background color of output - the scrambled/unscrambled word - instead.*/

function winChecker() {
    if (inWord.value.toLowerCase() == game.sel) { //EDIT: added .toLowerCase()
        game.score++;
        maxGuesses++; //EDIT: Added maxGuesses - stop game play at 5 goes. See gamePlay()
        console.log(maxGuesses);
        console.log(game.sel); //testing got right part to print
        inWord.disabled = true; //stop player entering correct score indefinitely. 
        inWord.style.display = "none"; //EDIT: set textarea to disappear when correct to make room for button. 
        output.style.backgroundColor = "#b9ecdc";
        btn.style.display = "block";
        btn.textContent = "Click for next word";
        restart.style.display = 'block'; 
        output.textContent = `${game.sel}`; //EDIT: When guess right the ouput myWord unscrambles. 
        } else {
        console.log("Incorrect"); //if incorrect clear out inWord value so user cont. 
        inWord.value = "";
        inWord.focus();//Focus back on textarea
        output.style.backgroundColor = "pink"; 
        maxGuesses++; 
        console.log(maxGuesses);
        game.incorrect++;
        inWord.style.display = "none"; //EDIT: copied from above so can't enter correct word
        btn.style.display = "block"; //EDIT: copied from above 
        btn.textContent = "Click for next word"; //EDIT: move onto next word
        output.textContent = `${game.sel}`; //EDIT: Added will display correct word even if guess incorrect. 
    }

    addScore();

}

/*sorter(val)Function that continues to run until the word is scrambled
Scramble word letters using .split and turning into an array
to put word (temp) back into a string use temp.join()method
Edit: changed and added output style - padding, fontSize, borderRadius
Need to remove word already guessed from array using .shift()method.*/

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

/*split() splits a string into an array of substrings, and returns the array
Splits the word into array of single letters
sort()sorts the array in alphabetical order
join() returns array as string. Does not alter original array. */

//run check to see if words are matching
//changing border width when checking making word shift - keep border same width throughout
//Edit: original used borderWidth to signify if correct - made word above move. Style background color instead. 
//Update score whenever checking the winner. If get it correct then want to increase if statement if incorrect same with else
//use game.score++ the addScore() to update score within same function as checking correct/incorrect. 
//if correct btn will display again to click for next word. Would prefer press enter for next word. 
//In winChecker function once played need to reenable new word to guess. 
//reenable new word by goint to btn.addEventListener function and setting inWord.disabled to false. 

//if (inWord.value.length == game.sel.length && e.code == "Enter") { changed 
// from or to and - to change back. 
// btn.addEventListener ('keyup', (e) => {
//     if (e.key === "Enter" || e.code === "Enter")
//         document.getElementsByTagName('btn-start').click(); { 
//         winChecker(); 
//         console.log('enter was pressed'); 
//     }
// })







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