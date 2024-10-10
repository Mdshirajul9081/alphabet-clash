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
function continueGame(){
    const alphabet=getARandomAlphabet()
     console.log(alphabet);
    const currentAlphabetElement=document.getElementById('current-alpha')
    currentAlphabetElement.innerText=alphabet;
    // set the background color
    setBackgroundColor(alphabet);

}

function play(){
    hideElementById('home')
    showElementById('play-ground')
    continueGame()
}