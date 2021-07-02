function insertionSort (arr){
    for(let i = 1 ; i < arr.length; i++){
        let correntValue = arr[i];
        for (let j = i-1 ;j >=0 && arr[j]>correntValue;  j--){
            arr[j+1]=arr[j];
            //console.log(arr);
             // console.log("==================");
            arr[j] = correntValue;
           // console.log(arr);
           // console.log("==================");
        }
        
    }
    return arr;
}
console.log(insertionSort ([1,2,3,4,0]));
//console.log(insertionSort ([10,9,8,7,6,5,4,3,2,1,0]));
//[7,3,2,1,45,32,0,4]