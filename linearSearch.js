function linearSearch(array1, num) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == num) {
      return i ;
  }
}
return -1 ;

}
console.log(linearSearch ([2,4,5,6,7,2,4,7,8,4,8,3,9],10)); // -1
console.log(linearSearch ([2,4,5,6,7,2,4,7,4,8,3,9],8)); // 9
