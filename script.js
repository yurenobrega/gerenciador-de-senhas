let password1 = document.getElementById("password-btn-1")
let password2 = document.getElementById("password-btn-2")

const characters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "!","@","#","$","%","^","&","*","_","-","+","=","?"
];

function generatePasswords() {
    if (password1.textContent != "" && password2.textContent != ""){
        password1.textContent = ""
        password2.textContent = ""
    }
    for(let i = 0; i < 15; i++){
        password1.textContent += characters[getRandomChar()]
        password2.textContent += characters[getRandomChar()]
    }
}

function getRandomChar(){
    return Math.floor(Math.random() * characters.length)
}

