const fibonacci = function(num) {
    let n1 = 0, n2 = 1, nextNumber;
    if(num > 0){
    for (let i = 1; i <= parseInt(num); i++){
        console.log(n1)
        nextNumber = n2 + n1
        n1 = n2
        n2 = nextNumber
    }
    return n1
        }else{
        return "OOPS"
    }
};
fibonacci(4)
// Do not edit below this line
module.exports = fibonacci;
