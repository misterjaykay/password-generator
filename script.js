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

    else {
      alert("You did not select lower case letters to your password.")
    }

  var passwordAskUpper = confirm("Do you want to add upper case letters to your password?")
    if (passwordAskUpper === true) {
      for (var i = 0; i < 2; i++) {
        var randomUpper = Math.floor(Math.random() * passwordUpper.length);
        passwordPool += passwordUpper[randomUpper];
      }
      console.log(passwordPool);
    }

    else {
      alert("You did not select upper case letters to your password.")
    }

  var passwordAskNumber = confirm("Do you want to add numeric values to your password?")
    if (passwordAskNumber === true) {
      for (var i = 0; i < 2; i++) {
        var randomNumb = Math.floor(Math.random() * passwordNumber.length);
        passwordPool += passwordNumber[randomNumb];
      }
      console.log(passwordPool);
    }
    
    else {
      alert("You did not select numeric values to your password.")
    }

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

    else if (passwordAskLower === false && 
          passwordAskNumber === false && 
          passwordAskSpecial === false && 
          passwordAskUpper === false) {
      alert("Password cannot be made. \nYou need to choose at least one character type."); 
    }

    else {
      alert("You did not select special characters to your password");
    }

    // for (var j = 0; j < passwordPool; j++) {
    //   // console.log("passwordLetter"+ i);
    //   var randomize = Math.floor(Math.random() * passwordPool.length);
    //   console.log(randomize);
    //   passwordResult += passwordPool[randomize];
    //   console.log(passwordResult);

    // var passwordResult = passwordPool.split("");
    // function shuffle(array) {
    //   array.sort(() => Math.random() - 0.5);
    // }
    
    // shuffle(passwordResult);
    // console.log(passwordResult);

    // return passwordResult.join("");
    
    var poolArray = passwordPool.split(""); // ["a","b","c"]
    var randomList = []; //empty array
    for (var i = 0; i < passwordPool.length; i++) { // loop password length time
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