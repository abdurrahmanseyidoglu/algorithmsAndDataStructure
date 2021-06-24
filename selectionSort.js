function swap (arr,index1,index2){
    const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
function selectionSort(arr){

    for(let i = 0 ; i <arr.length; i++){
      for (let j = i+1 ; j<arr.length;j++){
        let min;
       // console.log(i,j);
          if (arr[j]<arr[i] ){
            min =arr[j];
           swap(arr,i,j);
           console.log("SWAP MADE !!")
      }
    }
  }
  return arr;
}
selectionSort([0,2,34,22,10,19,17])