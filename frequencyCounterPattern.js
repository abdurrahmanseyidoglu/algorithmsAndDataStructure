function squared(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freq1 = {};
  let freq2 = {};
  for (let num of arr1) {
    freq1[num] = freq1[num] + 1 || 1;
  }
  for (let num of arr2) {
    freq2[num] = freq2[num] + 1 || 1;
  }
  for (let key in freq1) {
    if (!(key ** 2 in freq2)) return false;
    if (freq1[key] !== freq2[key ** 2]) return false;
  }
  return true;
}

//tests

console.log(squared([1, 2, 3], [9, 1, 4])); //True
console.log(squared([1, 2, 3], [1, 4])); //Flase
console.log(squared([2, 2, 3], [4, 9, 9])); //Flase
