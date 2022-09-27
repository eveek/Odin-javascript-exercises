const ftoc = function(f) {
  const c = (f - 32) * 5/9;
  const roundC = Math.round(c * 10)/ 10;
  return roundC;
};

const ctof = function(c) {
  const f = c * 9/5 + 32;
  const roundF = Math.round(f * 10)/ 10;
  return roundF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
