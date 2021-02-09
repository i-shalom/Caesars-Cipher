function rot13(str) {
let decode = "";
let alphabetStart = "abcdefghijklm".toUpperCase();
   
let alphabetEnd = "nopqrstuvwxyz".toUpperCase();
   

for (let i = 0; i < str.length; i += 1) {
  let letterToDecode = str[i];
    if (alphabetStart.indexOf(letterToDecode) >= 0) {
 decode += alphabetEnd[alphabetStart.indexOf(letterToDecode)];
 
    } else if (alphabetEnd.indexOf(letterToDecode) >= 0) {
      decode += alphabetStart[alphabetEnd.indexOf(letterToDecode)];
    } else {
      decode += letterToDecode;
}
}
return decode;
}
rot13("SERR PBQR PNZC");