function duplicateCount(text){
  text = text.toLowerCase();
  let splitText= [...text];
  let letters = {};
  for(let i=0;i<splitText.length;i++){
    if(letters.hasOwnProperty(splitText[i])){
      letters[splitText[i]]++;
    } else {
      letters[splitText[i]]=1;
    }
  }
  let final = 0;
  for(letter in letters){
    if(letters[letter] > 1){
    final++;
    }
  }
  return final;
}