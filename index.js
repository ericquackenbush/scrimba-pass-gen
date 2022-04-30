const lowercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const uppercase = "abcdefghijklmnopqrstuvwxyz"
const digits = "0123456789"
const alphabet = lowercase + uppercase + digits

const passwordLength = 10

// generates a password from alphabet of a given length
function generatePassword(length) {
    let randChars = Array.from({length: length}, () => alphabet[Math.floor(Math.random() * alphabet.length)])
    return randChars.join('')
}

// display four randomly generated passwords on the website
function generatePasswords() {
    // get the spans where the passwords will be displayed
    firstPasswordElem = document.querySelector("#password1")
    secondPasswordElem = document.querySelector("#password2")
    thirdPasswordElem = document.querySelector("#password3")
    fourthPasswordElem = document.querySelector("#password4")

    // display the generated passwords
    firstPasswordElem.textContent = generatePassword(passwordLength)
    secondPasswordElem.textContent = generatePassword(passwordLength)
    thirdPasswordElem.textContent = generatePassword(passwordLength)
    fourthPasswordElem.textContent = generatePassword(passwordLength)
}
