// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLower = "abcdefghijlkmnopqrstuvwxyz";
var passwordUpper = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
var passwordSpec = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordNumber = "1234567890";

var passwordSpecArray = passwordSpec.split("");

function generatePassword() {
  var passwordPool = ""

  var passwordAsk = prompt("How long do you want your password to be?")
 
    if (passwordAsk >= 8 && passwordAsk < 129) {
      console.log(passwordAsk);  
    }
    else {
      alert("You have to have more than 8 letters and less than 128 letters"); 
      return;
    }

  
  var passwordAskSpecial = confirm("Do you want to add special charcters to your password?")
    if (passwordAskSpecial === true) {
      for (var i = 0; i < 2; i++) {
        var randomSpec = Math.floor(Math.random() * passwordSpecArray.length);
        passwordPool += passwordSpec[randomSpec]; 
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

  var passwordAskLower = confirm("Do you want to add lower case letters to your password?")
    if (passwordAskLower === true) {
      var remain = passwordAsk - passwordPool.length;
      console.log(remain);

      for (var i = 0; i < remain; i++) {
        var randomSpc = Math.floor(Math.random() * passwordLower.length);
        passwordPool += passwordLower[randomSpc];
      }
      console.log(passwordPool);
    }  

    else if (passwordAskLower === false && 
          passwordAskNumber === false && 
          passwordAskSpecial === false && 
          passwordAskUpper === false) {
      alert("Password cannot be made. \nYou need to choose at least one character type."); 
    }

    var poolArray = passwordPool.split(""); 
    var randomList = []; 
    for (var i = 0; i < passwordPool.length; i++) { 
    randomindex = Math.floor(Math.random() * (poolArray.length-1))  
    randomList.push(poolArray[randomindex]);
    poolArray.splice(randomindex,1)
    };

    finalPassword = randomList.join("");
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