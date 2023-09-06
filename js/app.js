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
btn.textContent = "START GAME";

// textContent - could also do innerHtml
output.textContent = "Click that button";

// Add to HTML page using append. Append to gameArea
// can also prepend and will appear on page first
gameArea.append(btn);
gameArea.append(output);

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
    let temp = game.sel.split('');
    temp.sort(() => {
        return 0.5 - Math.random()
    });
    temp.join('');
    console.log(temp); 

    //create a function that continues to run until the word is scrambled
    //make sure the word is scrambled 


    output.textContent = `${game.sel} is our word`;
    console.log(myWords);
})

// Learning to do: random sort, template literals. 

// First randomise the word using Math.randon() then make the word
// into an array and use split()method and randomise the new array. 