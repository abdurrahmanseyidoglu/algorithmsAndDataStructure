function validAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freq1 = {};
  let freq2 = {};
  for (let num = 0; num < arr1.length; num++) {
    let char = arr1[num];
    freq1[char] = freq1[char] + 1 || 1;
  }

  for (let num = 0; num < arr2.length; num++) {
    let char = arr2[num];
    freq2[char] = freq2[char] + 1 || 1;
  }

  for (let key in freq1) {
    if (!(key in freq2)) return false;

    if (freq1[key] !== freq2[key]) return false;
  }
  return true;
}
//tests
console.log(validAnagram("", "")); //true
console.log(validAnagram("aaz", "zza")); //false
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("rat", "car")); //false
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("texttwisttime", "timetwisttext")); //true
