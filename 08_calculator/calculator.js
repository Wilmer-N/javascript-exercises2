const add = function(num1, num2) {
    return num1 + num2
};

const subtract = function(num1, num2) {
    return num1 - num2
};

const sum = function(array) {
  let sumNum = 0;
  array.forEach(num => {
    sumNum += num
  });
  return sumNum
};

const multiply = function(array) {
    let mulNum = 1;
    array.forEach(num =>{
      mulNum *= num;
    })
    return mulNum;
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
  let facNum = 1;
  if (num === 0){
    return 1
  }else{
	for(let i = num; i > 0; i--){
    facNum *= i;
  }}
  return facNum
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
