/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

//for (let i = 0; i < 10000000000; i++) {}
function wait1(t) {
  const one = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`resolved after ${t} sec`);
    }, t * 1000);
  });
  return one;
}

function wait2(t) {
  const two = new Promise(function (resolve) {
    setTimeout(() => {
      resolve(`resolved after ${t} sec`);
    }, t * 1000);
  });
  return two;
}

function wait3(t) {
  const three = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`resolved after ${t} sec`);
    }, t * 1000);
  });
  return three;
}

async function calculateTime(t1, t2, t3) {
  const start = Date.now();
  const value = await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
  console.log(value);
  const end = Date.now();
  const diff = end - start;
  console.log(diff);
}
calculateTime(1, 1, 1);

module.exports = calculateTime;