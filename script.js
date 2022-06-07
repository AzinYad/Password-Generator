
let characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
                  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-","_","~", "+", "{", "}", ":", "<", ">", "?"]

let secA=document.getElementById("sec-a")
let secB=document.getElementById("sec-b")
let secC=document.getElementById("sec-c")
let secD=document.getElementById("sec-d")
let charLength=document.getElementById("char-length")

function create(){

        let passWord=""

    for (i=0; i< charLength.value; i++){
        let randomIndex= Math.floor(Math.random()*characters.length)
        passWord+=characters[randomIndex] 
    }
   return passWord
}

function generate(){

secA.textContent=create()
secB.textContent=create()
secC.textContent=create()
secD.textContent=create()

}

function copy(sign) {
   if (sign==='a') {
      navigator.clipboard.writeText(secA.textContent);
      secA.textContent= " Copied to Clipboard " ;
   } 
   if (sign==='b') {
      navigator.clipboard.writeText(secB.textContent);
      secB.textContent= " Copied to Clipboard " ;
   } 
   if (sign==='c') {
      navigator.clipboard.writeText(secC.textContent);
      secC.textContent= " Copied to Clipboard " ;
   } 
   if (sign==='d') {
      navigator.clipboard.writeText(secD.textContent);
      secD.textContent= " Copied to Clipboard " ;
   } 

}
