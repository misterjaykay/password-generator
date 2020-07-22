// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// asking length of character size
    var password = prompt("How long do you want your password to be? \nWarning:")


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password arrays for example
var lowerCase = ["a","b","c","d","e","f","g","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    for (var i = 0; i < lowerCase.length; i++) {
        console.log(lowerCase[i]);
    }

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    for (var j = 0; j < 10; j++) {

        var testRun = upperCase[Math.floor(Math.random() * upperCase.length)];
        console.log(testRun)
    }


var specialChar = ["!",",","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

    for (var h = 0; h < 10; h++) {

        var testRun = specialChar[Math.floor(Math.random() * specialChar.length)];
        console.log(testRun)
    }

var numericValue = ["1","2","3","4","5","6","7","8","9","0"];

    for (var k = 0; k < 10; k++) {
        
        var testRun = numericValue[Math.floor(Math.random() * numericValue.length)];
        console.log(testRun)
    }


// testing out some code and results // 
// var test = "abcdefghijklmnopqrstuvwxyz"
// var test1 = test.split("")
// for (var j = 0; j < 10; j++) {

//     var testRun = test1[Math.floor(Math.random() * upperCase.length)];
//         console.log(testRun)
//     }
// VM537:4 p
// VM537:4 j
// VM537:4 h
// VM537:4 u
// VM537:4 k
// VM537:4 r
// 2VM537:4 g
// VM537:4 p
// VM537:4 m