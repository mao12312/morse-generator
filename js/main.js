let MORSE_CODE = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    " ": " ",
};
const decodeMorse = () => {
    let morseCode = document.getElementById("morseIpt").value;
    let decodeString = '';
    morseCodeSpt = morseCode.split('   ');
    for (i in morseCodeSpt) {
        var morseCodeArray = morseCodeSpt[i].split(' ');
        for (j in morseCodeArray) {
            if (MORSE_CODE[morseCodeArray[j]] !== undefined) {
                decodeString += MORSE_CODE[morseCodeArray[j]];
            }
        }
        decodeString += ' ';
    }
    decodeString = decodeString.trim();
    document.getElementById("demo").innerHTML = decodeString;
}

const encodeMorse = () => {
    let str = document.getElementById("morseIpt").value.toUpperCase().split('');
    let encodeStrSpt = [];
    for (let i = 0; i < str.length; i++) {
        let searchValue = str[i];
        let result = Object.keys(MORSE_CODE).reduce(function (r, k) { return MORSE_CODE[k] === searchValue ? k : r }, null);
        if (result !== null) {
            encodeStrSpt.push(result);
        } else {
            return document.getElementById("demo1").innerHTML = "不適切な文字です";
        }
    }
    let encodeStr = encodeStrSpt.join(' ');
    document.getElementById("demo").innerHTML = encodeStr;
}

const check = () => {
    let element = document.target.select.value
    if(element === "encode"){
        encodeMorse()
    }else if(element === "decode"){
        decodeMorse()
    }else{
        return "選択してください"
    }
}
function hello(){
    console.log("hello")
}
function goodby(){
    console.log("goodby")
}