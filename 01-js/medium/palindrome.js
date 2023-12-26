/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let uper=str.toUpperCase();
  let ary = uper.replace(/[^\w\s]/g,"").split('');
  let newAry = [];
  if(ary.length==0){
    return true;
  }
  for(let i=0;i<ary.length;i++)
  {
       newAry[ary.length-i-1] = ary[i]; //insted of for loop use ary.reverse();
       
  }
  for(let i=0;i<ary.length;i++)
  {
  if(ary[i]==newAry[i]){
    return true;
  }

else{
  return false;

}
}
}

module.exports = isPalindrome;
