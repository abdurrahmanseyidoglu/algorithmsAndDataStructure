function searchString(arr, subArr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < subArr.length; j++) {
      if (subArr[j] !== arr[i + j]) {
        break;
      } 
       if (j == subArr.length - 1) {
        counter++;
        console.log("Found one!!");
      }
    }
  }
  return console.log(counter );
}


searchString ('himyfameismustafafakthwewtwtgh','hi');