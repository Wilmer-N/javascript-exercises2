const reverseString = function (str){
    const splitStr = str.split("");
    const reverseArrey = splitStr.reverse();
    const joinArrey = reverseArrey.join("");
    return joinArrey;
}
reverseString("")
// Do not edit below this line
module.exports = reverseString;
