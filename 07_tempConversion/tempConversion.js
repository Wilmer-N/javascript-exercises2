const ftoc = function(fahr) {
  const newCel = (fahr * 5 -160) / 9;
  if (newCel % 1 === 0){
    return newCel
  }else{
    return parseFloat(newCel.toFixed(1))
  }
};

const ctof = function(cel) {
    const newFahr = (160 + 9 * cel) / 5;
    if (newFahr % 1 === 0){
      return newFahr
    }else{
      return parseFloat(newFahr.toFixed(1))
    }
    
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
