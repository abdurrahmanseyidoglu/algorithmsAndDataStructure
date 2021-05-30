function maxSupArray(array1,num) {
    if (num > array1.length) {
        return null;
    }
    let maxSum = 0;
    let temp = 0 ;
    for (let i = 0; i < num; i++) {
       maxSum += array1[i];
    }
    temp = maxSum ;
    for (let i = num ; i <array1.length; i++){
        temp = temp - array1[i - num] + array1[i];
       maxSum = Math.max(maxSum , temp);
    }
    return maxSum;
}
//test
console.log (maxSupArray([2,9,5,1,7,3,8,6,5,4,8],3));