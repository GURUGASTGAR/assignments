/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
<<<<<<< HEAD
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello");
    }, milliseconds);
  });
  return p;
}
async function main() {
  //this function is syncronous
  console.log(sleep()); // this line will get exected syncronously as it returns promise but not the resolve value cannot call the promise by only calling the function we need to add .then ot use await keyword for it
  const awa = await sleep(1000); // which is solved by this await function/keyword
  console.log(awa);
}
main();
let a = 0;

while (true) {
  a++;
=======
>>>>>>> upstream/master
}

module.exports = sleep;
