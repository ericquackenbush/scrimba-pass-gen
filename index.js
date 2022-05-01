const lowercase = Array.from(Array(26)).map((e, i) => String.fromCharCode(i + "a".charCodeAt()))
const uppercase = lowercase.map(e => e.toUpperCase())
const digits = Array.from(Array(10)).map((e, i) => i)
const alphabet = [...lowercase, ...uppercase, ...digits]

// generates a password of a given length from alphabet
function generatePassword(length) {
    let randCharArray = Array.from({length: length}, () => alphabet[Math.floor(Math.random() * alphabet.length)])
    return randCharArray.join('')
}

// display four randomly generated passwords on the website
function displayPasswords() {
    // get the spans where the passwords will be displayed
    passwordElems = document.querySelectorAll("#password-container span")

    // get the user-specified password length
    const passwordLengthInput = document.querySelector("#password-length")
    console.log(passwordLengthInput.value)

    // display the generated passwords
    passwordElems.forEach(passwordElem => passwordElem.textContent = generatePassword(passwordLengthInput.value))
}