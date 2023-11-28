let winningnumber = 19;
let userGuess= +prompt();
if(winningnumber===userGuess)
{
   console.log("your guess is correct");
}
else
{
    if(userGuess <winningnumber)
    {
        console.log("You are too low");
    }
    else
    {
        console.log("you are too high!!!!");

    }
 

}