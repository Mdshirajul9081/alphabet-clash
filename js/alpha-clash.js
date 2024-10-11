// function play(){
//     const homeScreen=document.getElementById('home')
//     homeScreen.classList.add('hidden')
//     console.log(homeScreen.classList);
    

//     const playGroundSection=document.getElementById('play-ground')
//     playGroundSection.classList.remove("hidden")
//     console.log(playGroundSection.classList);
// }
// // this work another way to utility.js section
// // this is is use of the function shortcut system


// call back function
function handelKeyBoardKeyPress(event){
    const playerPress=event.key;
    console.log('player press',playerPress);
    //get the expected to press
    const currentAlphabetElement=document.getElementById('current-alpha')
    const currentAlphabet=currentAlphabetElement.innerText;
    const expected=currentAlphabet.toLowerCase();
    console.log(playerPress,expected);


//    checked match or not 
if(playerPress===expected){
    console.log('you get a point ');
} 
else{
    console.log('you missed.lost a life');
}

} 

// press the keybord 
document.addEventListener('keyup',handelKeyBoardKeyPress)




function continueGame(){
    const alphabet=getARandomAlphabet()
     console.log( 'random alphabet',alphabet);
    const currentAlphabetElement=document.getElementById('current-alpha')
    currentAlphabetElement.innerText=alphabet;
    // set the background color
    setBackgroundColor(alphabet);
    //remove background color
    // removeBackgroundColor(alphabet)

}

function play(){
    hideElementById('home')
    showElementById('play-ground')
    continueGame()
}