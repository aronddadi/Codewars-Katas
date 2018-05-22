function anagrams(word, words) {

 return words.filter(a =>
     a.split('').sort().toString() === word.split('').sort().toString()
  );
}