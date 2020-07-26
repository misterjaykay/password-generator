// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLower = "abcdefghijlkmnopqrstuvwxyz";
var passwordUpper = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
var passwordSpec = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordNumber = "1234567890";

function generatePassword() {
  var passwordPool = "";
  var poolPick ="";
  var passwordAsk = prompt("How long do you want your password to be?")
 
    if (passwordAsk >= 8 && passwordAsk < 129) { 

      var passwordAskSpecial = confirm("Do you want to add special charcters to your password?")
      if (passwordAskSpecial === true) {
        passwordPool += passwordSpec;
        for (var i = 0; i < 1; i++) {
          var randomSpec = Math.floor(Math.random() * passwordSpec.length);
          poolPick += passwordSpec[randomSpec]; 
        }
      }

      var passwordAskUpper = confirm("Do you want to add upper case letters to your password?")
      if (passwordAskUpper === true) {
        passwordPool += passwordUpper;
        for (var i = 0; i < 1; i++) {
          var randomUpper = Math.floor(Math.random() * passwordUpper.length);
          poolPick += passwordUpper[randomUpper]; 
        }
      }

      var passwordAskNumber = confirm("Do you want to add numeric values to your password?")
      if (passwordAskNumber === true) {
        passwordPool += passwordNumber;
        for (var i = 0; i < 1; i++) {
          var randomNumb = Math.floor(Math.random() * passwordNumber.length);
          poolPick += passwordNumber[randomNumb]; 
        }
      }

      var passwordAskLower = confirm("Do you want to add lower case letters to your password?")
      if (passwordAskLower === true) {
        passwordPool += passwordLower;
        for (var i = 0; i < 1; i++) {
          var randomLower = Math.floor(Math.random() * passwordLower.length);
          poolPick += passwordLower[randomLower]; 
        }
      }

      if (passwordAskLower === false && 
        passwordAskNumber === false && 
        passwordAskSpecial === false && 
        passwordAskUpper === false) {
        alert("Password cannot be made. \nYou need to choose at least one character type."); 
        return;
      }
    }
    else {
      alert("You have to have more than 8 letters and less than 128 letters"); 
      return;
    }

  var poolPickMore = [];

  for (var i = 0; i < passwordAsk - poolPick.length; i++) {
    index = Math.floor(Math.random() * passwordPool.length);
    poolPickMore.push(passwordPool[index]);
  }

  var poolPickMoreFinal = poolPickMore.join("");
  var finalPassword = poolPick + poolPickMoreFinal;

  console.log("Final password is ", finalPassword);
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);