function hideElementById(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('hidden')

}
function showElementById(elementId){
    const show=document.getElementById(elementId)
    show.classList.remove("hidden")
}


function setBackgroundColor(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('bg-orange-400') 
}


function getARandomAlphabet(){
    const alphabetString='abcdefghijklmnopurstuvwxyz'
    //make the array in the all alphabet
    const alphabets=alphabetString.split('')
    console.log(alphabets);


    // get the random alphabets and take the A to Z index 25 
    const randomNumber=Math.random()*25;
    //and it round the number and its give the purno number
    const index=Math.round(randomNumber);
    //and take the all alphabets index number 
    const alphabet=alphabets[index]
    // console.log(index,alphabet);
    // and return the alphabet
    return alphabet
}