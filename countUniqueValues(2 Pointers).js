function countUniqueValues(array1) {
  if (array1.length == 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < array1.length; j++) {
    if (array1[i] !== array1[j]) {
      i++;
      array1[i] = array1[j];
    }
  }
  return i + 1;
}

//test                        i j
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4
