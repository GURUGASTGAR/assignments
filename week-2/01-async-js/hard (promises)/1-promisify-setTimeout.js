/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
<<<<<<< HEAD
  const waits = new Promise(function (resolve) {
    setTimeout(() => {
      resolve(`resolved after ${n} sec`);
    }, n * 1000);
  });
  return waits;
}
// async function ans() {
//   const answer = await wait(5);
//   console.log(answer);
// }
// ans();
=======
}

>>>>>>> upstream/master
module.exports = wait;
