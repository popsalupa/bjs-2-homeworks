function compareArrays(arr1, arr2) {
  let result;

 result = arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);


  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

resultArr = arr.filter(function(elem){
  return elem > 0;
});
resultArr = resultArr.filter(function(thirt){
  return thirt %3==0;
});

resultArr = resultArr.map ((multi) => multi * 10);

  //фильтр который ищет только полож числа (>0)*
  //фильтр который ищет только кратные 3 (/3)*
  //map который *10 получинные числа*
  

  return resultArr; // array
}
