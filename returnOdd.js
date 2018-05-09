function sortArray(array) {
  if(array ==[]){
    return array;
  }
  // if Array is empty you just return the array
  
  else{
  // If it's not we gon check it
    let odds = array.filter( elem => {
    return elem % 2;
  })
// filtering array

  odds.sort((a, b) => a - b);
  // Sorting the odd ones, to put them in the correct order
  let counter = 0
  let result = array.map( elem => {
    if(elem % 2) {
     counter++;
     return odds[counter - 1];
    } else {
      return elem;
    }
  })
// LoL
  return result  
  }
  //return the sorted array
}