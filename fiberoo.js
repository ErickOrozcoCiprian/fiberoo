function fib() {
  const array = [0, 1];
  for (let i = 2; i < 50; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array;
}

function numsToStrings(arr) {
  return _.map(arr, function (num) { return `${num}`; });
}

function numEvenNums(arr) {
  const newArr = _.filter(arr, function (num) { return num % 2 === 0; });
  return newArr.length;
}
console.log(fib());
console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));
