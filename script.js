// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLower = "abcdefghijlkmnopqrstuvwxyz";
var passwordUpper = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
var passwordSpec = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordNumber = "1234567890";
var msgDiv = document.querySelector("#password");

function generatePassword() {
  var passwordPool = ""
  var passwordResult = [];

  var passwordAsk = prompt("How long do you want your password to be?")
 
    if (passwordAsk >= 8 && passwordAsk < 128) {
      console.log(passwordAsk);  
    }
    else {
      alert("You have to have more than 8 letters and less than 128 letters"); 
      return;
    }

  var passwordAskLower = confirm("Do you want to add lower case letters to your password?")
    if (passwordAskLower === true) {
      for (var i = 0; i < 2; i++) {
        var randomLower = Math.floor(Math.random() * passwordLower.length);
        passwordPool += passwordLower[randomLower];
        
      }
      console.log(passwordPool);
    }

  var passwordAskUpper = confirm("Do you want to add upper case letters to your password?")
    if (passwordAskUpper === true) {
      for (var i = 0; i < 2; i++) {
        var randomUpper = Math.floor(Math.random() * passwordUpper.length);
        passwordPool += passwordUpper[randomUpper];
      }
      console.log(passwordPool);
    }

  var passwordAskNumber = confirm("Do you want to add numeric values to your password?")
    if (passwordAskNumber === true) {
      for (var i = 0; i < 2; i++) {
        var randomNumb = Math.floor(Math.random() * passwordNumber.length);
        passwordPool += passwordNumber[randomNumb];

      }
      console.log(passwordPool);
    }
    // everything is working on top ^^^

  var passwordAskSpecial = confirm("Do you want to add special charcters to your password?")
    if (passwordAskSpecial === true) {
      var remain = passwordAsk - passwordPool.length;
      //remaining length of password
      console.log(remain);

      for (var i = 0; i < remain; i++) {
        var randomSpc = Math.floor(Math.random() * passwordSpec.length);
        passwordPool += passwordSpec[randomSpc];
    
      }
      console.log(passwordPool);
      
    }  

    // passwordPoolList = passwordPool.split("");
    // passwordPoolFinal = "";
    // console.log(passwordPool); //same as top
    // console.log(passwordPoolList); // now it has numbers of arrays.

    // place another random loop here

    for (var j = 0; j < passwordAsk; j++) {
      // console.log("passwordLetter"+ i);
      var randomize = Math.floor(Math.random() * passwordAsk.length);
      console.log(randomize);
      passwordResult += passwordPool[randomize];
      console.log(passwordResult);


    }
    console.log(passwordResult);
  
    return passwordResult;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);