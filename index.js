const lowercase = Array.from(Array(26)).map((e, i) => String.fromCharCode(i + "a".charCodeAt()))
const uppercase = lowercase.map(e => e.toUpperCase())
const digits = Array.from(Array(10)).map((e, i) => i)
const specialChars = Array.from("!@#$%^&*")
const alphabet = [...lowercase, ...uppercase, ...digits, ...specialChars]

// generates a password of a given length from alphabet
function generatePassword(length) {
    let randCharArray = Array.from({length: length}, () => alphabet[Math.floor(Math.random() * alphabet.length)])
    return randCharArray.join('')
}

// set the display of password-container to 'none'
let passwordContainerElem = document.querySelector("#password-container")
passwordContainerElem.style.display = "none"

// display four randomly generated passwords on the website
function displayPasswords() {
    // get the spans where the passwords will be displayed
    passwordElems = document.querySelectorAll("#password-container input")

    // get the user-specified password length
    const passwordLengthInput = document.querySelector("#password-length-el")

    // display the generated passwords
    passwordElems.forEach(passwordElem => passwordElem.value = generatePassword(passwordLengthInput.value))

    // set the display of password-container back to 'grid'
    passwordContainerElem.style.display = "grid"

    // set the display of shadow-password-container to 'none'
    let shadowPasswordContainerElem = document.querySelector("#shadow-password-container")
    shadowPasswordContainerElem.style.display = "none"
}

function copyPassword(e) {
    // write the password to the clipboard
    navigator.clipboard.writeText(e.value)

    // alert the user
    alert("Copied password!")
}