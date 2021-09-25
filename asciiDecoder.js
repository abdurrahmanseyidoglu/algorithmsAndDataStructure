function decode(coded) {
  const myArr = coded.split(" ");
  let outPut = "";
  myArr.map(function (item) {
    let sum = 0;
    for (i in item) {
      sum += parseInt(item[i], 10);
    }
    let message = String.fromCharCode(sum);
    outPut+=message
  });
  console.log(outPut);
}
decode("361581732726247521644353 4161492813593986955 84654117917337166147521"); 
//abc
