//nice to have - click to skip to  next word 
//nice to have - separate letters of words to guess into boxes - see conundra
// debug by outputing object to console. 
// select element on html page use querySelector
// selects the "gameArea" class
// gameArea "object"
const gameArea = document.getElementById('game-area');

// create a button to start - can also create btn in hmtl
// document.createElement() is a method. 
const btn = document.createElement('button');

// output some content - eventually scrambled word
// creating a div in html
const output = document.createElement('div');


// const output = document.createElement("p");
// const node = document.createTextNode("text node");
// output.appendChild(node);

// const element = document.getElementsByClassName("click_button");
// element.appendChild(output);



const inWord = document.getElementById('input-word');
inWord.setAttribute('type', 'text');
inWord.classList.add = "input-text";
//output.style.textAlign = "center"; //use flex - html and CSS this will be deleted. 

const scoreBoard = document.createElement('div');
scoreBoard.textContent = "Score";  //EDIT: removed "Score in html"
scoreBoard.classList.add("div-scoreboard");
//Edit: added classname to scoreBoard so can style

btn.textContent = "START GAME";
//Edit: add class to btn to style in css 
btn.classList.add("btn-start");

// textContent - could also do innerHtml
// output.textContent = "Click that button";
//Edit: add class to output so can style 
output.classList.add("div-played-words"); 

const restart = document.createElement('button');//EDIT Add refresh button
restart.id = "btn-refresh";
restart.innerHTML = "Restart"; 
document.body.appendChild(restart);
console.log(restart); //test restart button 

//create new button from 
//https://www.3schools.in/2022/08/how-to-create-button-with-id-js.html#:~:text=Use%20the%20createElement()%20method%20and%20set%20in%20a%20variable,an%20id%20to%20that%20button.

// Add to HTML page using append. Append to gameArea
// prepend scoreBoard at top

gameArea.append(scoreBoard); //Edit: move scoreboard input rather than above
gameArea.append(output);
gameArea.append(inWord);
gameArea.append(btn);
gameArea.appendChild(restart);


//hide scoreBoard, input and refresh at start of game
scoreBoard.style.display = 'none';
inWord.style.display = 'none';
restart.style.display = 'none';
output.style.display = 'none';

console.log(btn);

//Will have words stored in separate file and use the following code
//Will poss randomise words using
/**
 * let myWords = Math.floor(Math.random() * words.length; )
 */



// creating array of words to scramble
// add score and incorrect to game so can track 
// const myWords = ["bird", "dog", "cat", "cow", "horse", "sheep", "chicken", "capybara"];
//const myWords = [''];



const game = {
    sel: '',
    scramble: '',
    score: 0,
    incorrect: 0,
    maxGuesses: 0, //Edit - add maxGuesses so game over after 5 guesses. 
    played: myWords.length
};

let maxGuesses = ''; //Edit counting number of guesses 


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

//EDIT: create function to refresh 

restart.addEventListener("click", (e) => {
    window.location.reload();
})

restart.addEventListener("keypress", (e) => {
    window.location.reload();
})

//Fisher-Yate shuffle algorithim
// function shuffle(myWords) {
//     for (let i = myWords.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [myWords[i], myWords[j]] = [myWords[j], myWords[i]];
//     }
//     return myWords;
//   }

btn.addEventListener('click', (gamePlay));  //EDIT - separated out EventListener function and gameplay for more flexibility. 
// bth.addEventListener('keyup'(winChecker)); {
//     if ()
// }
// btn.addEventListener('keyup', (gamePlay));
// console.log('button was pressed')


// btn.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//     btn.click();
//     console.log("button clicked");
//     }
//     })

    
// btn.addEventListener('keyup', (e) => {
//     console.log(e); //removed - used for debugging
//     if (e.keyCode === 13) {
//         e.preventDefault();
//         document.getElementById("myBtn").click();
//     }
//     {
//     gamePlay()
//     }
// });


// var input = document.getElementById("myInput");
// input.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         document.getElementById("myBtn").click();
//     }
// });


// btn.addEventListener ("keydown", function(event) {
//     // If the user presses the "Enter" key on the keyboard
//     if (event.key === "Enter" || e.code === "Enter") {  
//         console.log('enter was pressed');    // Trigger the button element with a click
//     }
    
//     });



// document.getElementById("id_of_textbox")
//     .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("id_of_button").click();
//     }
// });

function gamePlay(){
    if (myWords.length <= 0 || (maxGuesses === 5)){ //when all words played //Edit add maxGuesses so can have infinite 
        //number of words but only play 5 at a time. 
        console.log('game over');
        console.log(maxGuesses);
        gameArea.innerHTML = `<div>GAME OVER</div>`;
        gameArea.innerHTML += `<div> Score ${game.score} out of 5 </div>`;//EDIT Changed so that will always say out of 5
        restart.style.display = 'block';
        gameArea.appendChild(restart); //EDIT add refresh button
        // gameArea.innerHTML = `<button>Refresh</button>`;
        // window.addEventListener('onClick',()=>{ location.reload()})
        // btn.style.display = "block";
        // btn.textContent = "Click for next word"; 
        

        //Want to reset game
        // btn.addEventListener('Click', (e) => {
        // window.location.reload(); //Edit: Add refresh but need it to be on click    
        // })
        
// function resetGame () {
//     if (gameArea.innerHTML += `<div> Score ${game.score} out of ${game.played}</div>`) {
//         btn.style.display = "block";
//         btn.textContent = "Click for next word"
//     }
// }
        
        
    } else { //edit from tutorial - too wordy with correct and incorrect.
        scoreBoard.style.display = 'block';
        inWord.disabled = false; //refresh word 
        inWord.value = ""; //clear input box on click 
        btn.style.display = "none"; //button disappears when click start
        // scramble the array
        // add random zero or a 1 randomise even more
        //will use Math.floor(Math.random)

        //toggle values of scoreBoard and input when start game
        output.style.display = 'block';//EDIT hide output variable before start game then make visible. 
        scoreBoard.style.display = 'block';
        inWord.style.display = 'block';
        restart.style.display = 'block';
        

        myWords.sort(() => {
            return 0.475 - Math.random()
        });



        //https://www.kodeclik.com/how-to-scramble-a-word-in-javascript/ how to scramble a word in javascript
        //selected word to be scrambled - whichever is first is random list
        //scramble word letters using .split and turning into an array
        //to put word (temp) back into a string use temp.join()method
        //Edit: changed and added output style - padding, fontSize, borderRadius
        //Need to remove word already guessed from array using .shift()method.
        game.sel = myWords.shift();
        //Edit: didn't add to game how many words left - too wordy. 
        game.scramble = sorter(game.sel); //passing into sorter selected word (game.sel)
        game.wordsLeft = myWords.length; //how many words left
        // output.style.fontSize = "3rem";
        // output.style.padding = "5px 5px";
        // output.style.borderRadius = "5px"; //Edit didn't change border
        output.style.backgroundColor = "#ADD8E6"; 
        inWord.setAttribute('maxlength', game.sel.length);
        inWord.focus(); //adds focus to input field 
        inWord.style.borderColor = "black";
        output.textContent = `${game.scramble}`;
        console.log(game.sel, game.scramble);
    }
}


//Add letter count using EventListener()
//the function will check to see what the length of the inWord input is
//everytime press in textbox get value 1 - length of word
//keyup counts key presses 
//counting because once reach same number of letters for word will do check 
//to see if word matches the word. 
//e.code means event.code - if press enter
//so if reach same number of letters or if press enter will check if matches word. 

inWord.addEventListener('keyup', (e) => {  //make more accessible if change from 'keypup' to 'click'
    // console.log(e); removed - used for debugging
    inWord.style.borderColor = "#000000"; //reset border color to default
    inWord.style.borderWidth = "2px"; //keep border width same throughout game play
    if (inWord.value.length == game.sel.length || e.code == "Enter") {
        winChecker(); //runt the winChecker function 
    }

})

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
    inWord.style.borderWidth = "2px";
    if (inWord.value.toLowerCase() == game.sel) {  //Edit: added .toLowerCase() - so makes no difference if start word with capitals
        // inWord.style.backgroundColor = "green"; //Edit: will change but better than changing border width. 
        game.score++;
        maxGuesses++; //attempting to count number of guesses - currently not defined. 
        console.log(maxGuesses);
        console.log(game.sel); //testing got right part to print
        inWord.disabled = true; //stop player entering correct score indefinitely. 
        inWord.style.display = "none"; //EDIT: set input to disappear when correct to make room for button - stop moving around -look slicker. 
        output.style.backgroundColor = "palegreen"; 
        btn.style.display = "block";
        btn.textContent = "Click for next word";
        restart.style.display = 'block'; 
        output.textContent = `${game.sel}`; //EDIT: When guess right the ouput myWord unscrambles. 
    
    } else {
        console.log("Incorrect"); //if incorrect clear out in.Word value so user cont. 
        inWord.value = "";
        inWord.focus();
        output.style.backgroundColor = "lightpink"; //EDIT changed background color of output not inWord
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

//create a function that continues to run until the word is scrambled
//because word isn't always scrambling

//game.sel = randomised word from array
//game.scramble = scrambled word

function sorter(val) {
    let temp = val.split('');
    temp.sort(() => {
        return 0.5 - Math.random()
    });
    temp = temp.join('');
    console.log(temp);
    /**Check if new word same as previous word
    if it is then have a problem - testing as go
    return sorter(val) if not true i.e. if not same as previous word
    then return temp to make sure is different 
    short cut if/else statement
    making sure won't get same value for game.sel as game.scramble
    will keep scrambling and comparing until they come back different then 
    will return
    Testing as we go by line 64 console.log(temp, sorter); */
    if (val === temp) {
        console.log(val, temp);
        return sorter(val);
    }
    return temp;
}




// Learning to do: random sort, template literals. 

// First randomise the word using Math.randon() then make the word
// into an array and use split()method and randomise the new array. 