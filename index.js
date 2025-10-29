const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const symbolsAndNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let passwordInLeftField = document.querySelector(".left")
let passwordInRightField = document.querySelector(".right")
let inputRange = document.querySelector("#input-range")
let toggleSwitch = document.querySelector("#symbols-and-numbers")

function generatePassword() {
    passwordInLeftField.textContent = ""
    if (document.querySelector("#symbols-and-numbers").checked === true) {
            for (let i = 0; i < inputRange.value; i++) {
            let characters = letters + symbolsAndNumbers
            let randomPasswordLeftField = Math.floor(Math.random() * characters.length)
            passwordInLeftField.textContent += characters[randomPasswordLeftField]
        }
    
        passwordInRightField.textContent = ""
        for (let i = 0; i < inputRange.value; i++) {
            let characters = letters + symbolsAndNumbers
            let randomPasswordRightField = Math.floor(Math.random() * characters.length)
            passwordInRightField.textContent += characters[randomPasswordRightField]
        }
    } else {
        passwordInLeftField.textContent = ""
        for (let i = 0; i < inputRange.value; i++) {
            let randomPasswordLeftField = Math.floor(Math.random() * letters.length)
            passwordInLeftField.textContent += letters[randomPasswordLeftField]
        }
    
        passwordInRightField.textContent = ""
        for (let i = 0; i < inputRange.value; i++) {
            let randomPasswordRightField = Math.floor(Math.random() * letters.length)
            passwordInRightField.textContent += letters[randomPasswordRightField]
        }
    }
    
}


