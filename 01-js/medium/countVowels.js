/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vol=['A','E','I','O','U'];
    let uper=str.toUpperCase().split("");
    let count=0;
    for(let i=0;i<uper.length;i++){
      for(let j=0;j<vol.length;j++){
            if(uper[i]==vol[j]){
              count++;
            }
      }
    }
    return count;
}

module.exports = countVowels;