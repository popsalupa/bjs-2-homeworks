// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg; 
  max = arr[0];
  min = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    else if (min > arr[i]) min = arr[i];
}
   sum = 0;
   for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);
  

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    sum = func(arrOfArr[i]);
    if (sum > max){
      max = sum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  min = arr[0];
  max = min;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  dist = max - min;
  return Math.abs(dist);
}
