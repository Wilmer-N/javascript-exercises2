const palindromes = function (string) {
   const punctuation = [".", ",", "!", "?", ":", ";", " "]
   let splitStr = string.split("")
   for(let i = 0; i < 2; i++){
   splitStr.forEach(char => {
        if (punctuation.includes(char)){
            const index = splitStr.indexOf(char)
            if (index > 0){
            let newString = splitStr.splice(index, 1)
            }
        }
    });}
    //removes all puntuation and spaces 
    // its runs 2 times to make sure there is no punctuation left

    
    const joinSplitStr = splitStr.join("");
    //creates a new string based on the first but without punctuation
    const reverseStr = splitStr.reverse();
    //reverses the first string
    const joinStr = reverseStr.join("");
    //joins the first string
    //checks if the first string and second both without punctuations match
    if (joinStr.toLowerCase() == joinSplitStr.toLowerCase()){
        return true
    }else{
        return false
    }
    // splitStr = ['r', 'a', 'c', 'e', 'c', 'a', 'r'}
    
};
palindromes("A car, a man, a maraca.")
// Do not edit below this line
module.exports = palindromes;
