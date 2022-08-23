const sumAll = function(num1, num2) {
    let newNum = 0
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    }else{
    if (num1 > num2){
        largest = num1
        smallest = num2
    }else{
        largest = num2
        smallest = num1
    }
    console.log(smallest)
    console.log(largest)

    for(let i = (smallest - 1); ((i < largest)); i++){
        newNum += (i + 1)
    }
    return newNum
}
};
sumAll(4, 8)
// Do not edit below this line
module.exports = sumAll;
