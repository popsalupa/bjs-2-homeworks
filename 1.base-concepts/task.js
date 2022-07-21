"use strict";
// ax^2+bx+c=0
// discrim D=b^2-4ac
// if D>0 (2sqrt) (-b + Math.sqrt(d) )/(2*a) и (-b - Math.sqrt(d) )/(2*a).
// if D=0 (1sqrt) -b/(2*a)
// if D<0 (NO sqrt)

function solveEquation(a, b, c) {
  let arr;
  let D = Math.pow(b, 2) - 4 * a * c;
  let root1;
  let root2; 

  if (D>0) {
    root1 = ((-b + Math.sqrt(D) )/(2*a));
    root2 = ((-b - Math.sqrt(D) )/(2*a));
    arr = [root1, root2];
  }
  else if(D==0){
    root1=(-b/(2*a));
    arr = [root1];
  }
  else if(D<0){
    arr = [];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
