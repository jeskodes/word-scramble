//select element on html page use querySelector - selecting gameArea class //
//gameArea "object"//
const gameArea = document.querySelector('.gameArea');

///create a button to start - can also create btn in hmtl
//document.createElement() is a method. 
const btn = document.createElement('button');
btn.textContent = "START GAME";

///Add to HTML page using append.
gameArea.append(btn);

console.log(btn);

///creating array of words to scramble
const myWords = ["bird", "dog", "cat", "cow"];

///Add in event listener - listening for presses on the btn.
///the button is a useable object. 
///The event object - can write out as function ?(e)=>{}
btn.addEventListener('click',(e)=>{
    console.log(e);
})