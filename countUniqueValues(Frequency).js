function countUniqueValues(array1) {
  if (array1.length == 0) {
    return 0;
  }
  let freq1 = {};
  for (let key of array1) {
    freq1[key] = freq1[key] + 1 || 1;
  }
  let uniqueVlaues = Object.keys(freq1).length;
  return uniqueVlaues;
}

//tests
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4
