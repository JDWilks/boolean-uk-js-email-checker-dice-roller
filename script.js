// Email checker
// - Make a list of emails

let emailList = ["jonathon@icloud.com", "rico@gmail.com", "nico@gmail.com", "sergio@gmail.com"]

// - Ask the user for their email

let myEmail = prompt("Please enter your email")

// - Check if their email is listed

emailList.includes(myEmail);

// - Output a message granting them access if the email is listed

// else statement is not working

if(true){
    alert("Welcome - come on in")
} else{
    alert("Go Away")
}

// Dice roller
// - Generate a random number from 1 to 6, for both the player and the computer
// >>>> note: i don't thinkg the below is not storing the number <<<<

let myDice = alert(Math.floor(Math.random() * 6) + 1)

let computerDice = alert(Math.floor(Math.random() * 6) + 1)

// >>>> note if i add a string it messes up the random number <<<<<

let myDice = alert("MyDice are" + Math.floor(Math.random() * 6) + 1)

// - Determine the winner, based on who gets the highest score and let the user know

if(myDice > computerDice){
    alert("myDice is the winner")
} else {
    alert("Computer is the winner")
}

// - Make it a best of 5!