// select element on html page use querySelector
// selects the "gameArea" class
// gameArea "object"
const gameArea = document.querySelector('.gameArea');

// create a button to start - can also create btn in hmtl
// document.createElement() is a method. 
const btn = document.createElement('button');

// output some content - eventually scrambled word
// creating a div in html
const output = document.createElement('div');
const inWord = document.createElement('input');
inWord.setAttribute('type', 'text');
inWord.classList.add('myInput'); 
//output.style.textAlign = "center"; //use flex - html and CSS this will be deleted. 
btn.textContent = "START GAME";

// textContent - could also do innerHtml
output.textContent = "Click that button";

// Add to HTML page using append. Append to gameArea
// can also prepend and will appear on page first
gameArea.append(btn);
gameArea.append(output);
gameArea.append(inWord);

console.log(btn);

//Will have words stored in separate file and use the following code
//Will poss randomise words using
/**
 * let myWords = Math.floor(Math.random() * words.length; )
 */


// creating array of words to scramble
const myWords = ["bird", "dog", "cat", "cow"];
const game = {
    sel: "",
    scramble: "",
}

// Add in event listener - listening for presses on the btn.
// the button is a useable object. 
// The event object - can write out as function ?(e)=>{}
// next want to randomise the array
// see https://www.w3schools.com/js/js_array_sort.asp
// will then move on to randomising letters
btn.addEventListener('click', (e) => {
    btn.style.display = "none"; //button disappears when click start
    // scramble the array
    // add random zero or a 1 randomise even more
    //will use Math.floor(Math.random)
    myWords.sort(() => {
        return 0.5 - Math.random()
    });

    //selected word to be scrambled - whichever is first is random list
    //scramble word letters using .split and turning into an array
    //to put word (temp) back into a string use temp.join()method
    game.sel = myWords[0];
    game.scramble = sorter(game.sel); //passing into sorter selected word (game.sel)
    let temp = game.sel.split('');
    temp.sort(() => {
        return 0.5 - Math.random()
    });
    temp.join('');
    console.log(temp);

    //create a function that continues to run until the word is scrambled
    //because word isn't always scrambling

    //game.sel = randomised word from array
    //game.scramble = scrambled word

    function sorter(val) {
        let temp = game.sel.split('');
        temp.sort(() => {
            return 0.5 - Math.random()
        });
        temp.join('');
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


    output.textContent = `${game.scramble}`;
    output.style.fontSize = "4rem";
    console.log(game.sel, game.scramble);
    //console.log(myWords);
})

// Learning to do: random sort, template literals. 

// First randomise the word using Math.randon() then make the word
// into an array and use split()method and randomise the new array. 