const guessBtn = document.getElementById("guess-btn");
const alertWrong = document.querySelector(".alert-wrong");
const alertRight = document.querySelector(".alert-right");

// generate random number between 0 to 100//
const randomNumber = Math.floor(Math.random()*101);
console.log(randomNumber);
//validate the user input//
const userInput = () =>{
 const userInputValue = parseFloat(document.querySelector("#guess-input").value);
 //if the user input is not a number//
 if(isNaN(userInputValue)){
    alertWrong.textContent =`Please enter a valid Number!`;
    alertRight.style.display ="none";
    //Hide the Wrong alert after 3 seconds//
    setTimeout(()=>{
        alertWrong.textContent="";
    }, 3000);
//if the user input is less than 0 and greater than 100//
}else if(userInputValue < 0 || userInputValue > 100){
    alertWrong.textContent ="Please enter a Number between 0 and 100!";
    alertRight.style.display ="none";
    //Hide the wrong alert after 3 seconds//
    setTimeout(()=>{
        alertWrong.textContent="";
    }, 3000);
    //if the user input is not equal to random number//
}else if(userInputValue !== randomNumber){
    alertWrong.textContent ="Ops! You guess it Wrong!";
    alertRight.style.display ="none";
    //hide the wrong alert after 3 seconds//
    setTimeout(()=>{
        alertWrong.textContent="";
    }, 3000);
}
//if the user input is equal to the random number//
else if(userInputValue ===randomNumber){
    alertRight.textContent = "Congratulations! You guessed it Correct!"
    alertRight.style.display ="block";
    alertWrong.textContent = "";
    //hide the sucess after 3 seconds//
    setTimeout(() => {
        alertRight.textContent = "";
        alertRight.style.display = "none";
        window.location.reload();
       
    }, 3000);
    
}
}

//adding the event listener to the guess button//
guessBtn.addEventListener("click", userInput);

//add the event listener to the user input field to show results on clicking enter key//
document.querySelector("#guess-input").addEventListener('keydown',(event)=>{
     if(event.key === "Enter"){
        userInput();
     }

});





