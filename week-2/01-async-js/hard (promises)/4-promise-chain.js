/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  const one = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`the wait time is ${t}`);
    }, t * 1000);
  });
  return one;
}

function wait2(t) {
  const one = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`the wait time is ${t}`);
    }, t * 1000);
  });
  return one;
}

function wait3(t) {
  const one = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`the wait time is ${t}`);
    }, t * 1000);
  });
  return one;
}

function calculateTime(t1, t2, t3) {
  const start = Date.now();
  return wait1(t1)
    .then((ans1) => {
      console.log(ans1);
      return wait2(t2);
    })
    .then((ans2) => {
      console.log(ans2);
      return wait3(t3);
    })
    .then((ans3) => {
      console.log(ans3);
      //console.log(ans1, ans2, ans3);
      const end = Date.now();
      console.log(end - start);
    });
}
calculateTime(1, 5, 1);

module.exports = calculateTime;
