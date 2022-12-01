const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let elOutput1 = document.getElementById("output1");
let elOutput2 = document.getElementById("output2");


function generatePassword(){
    let length = 15;
    let password = "";

    for(let i=0, n = characters.length; i < length; i++){
        password += characters[Math.floor(Math.random() * n)]
    }
    return password
}

function displayPassword(){
    elOutput1.textContent = generatePassword()
    elOutput2.textContent = generatePassword()
}
