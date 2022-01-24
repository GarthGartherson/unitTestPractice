const analyzeObject = function (array) {
  this.average = array.reduce((prev, cur) => prev + cur, 0) / array.length;

  this.min = (() => {
    let min = array[0];
    array.forEach(function (el) {
      if (el < min) {
        min = el;
      }
    });
    return min;
  })();

  this.max = findMax(array);

  this.length = array.length;
};

function findMax(array) {
  let max = array[0];
  array.forEach(function (el) {
    if (el > max) {
      max = el;
    }
  });
  return max;
}

function analyzeArray(array) {
  return new analyzeObject(array);
}

module.exports = analyzeArray;
