function minMax(arr){
  let lowestNumber=arr[0];
  let highestNumber=arr[0];
  for(let n of arr){
    if(lowestNumber> n){
    lowestNumber=n;
    }
    if(highestNumber <n){
    highestNumber=n;
    }
  }
  return [lowestNumber,highestNumber]; //
}