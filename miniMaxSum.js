function miniMaxSum(arr, min, max) {
  for (i = 0; i < arr.length; i++) {
    const tmp = [...arr];
    tmp.splice(i, 1);
    let sum = 0;
    for (j = 0; j < tmp.length; j++) {
      sum += tmp[j];
    }
    if (sum < min || min === 0) {
      min = sum;
    }
    if (sum > max) {
      max = sum;
    }
  }
  return { min, max };
}
const arr = [1, 3, 5, 7, 9];
console.time("a")
const result = miniMaxSum(arr, 0, 0);
console.timeEnd("a")
console.log(`${result.min} ${result.max}`);

const minMaxSum = (array) => {
  let sum = 0
  let min = null;
  let max = array[0];
  for(let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  for(let i = 0; i < array.length; i++) {
    const temp = [...array]
    const value = temp.splice(i, 1)
    const current = sum - value
    if(current < min || !min) {
      min = current
    }
    if(current > max) {
      max = current
    }
  }
  return {min, max}
}
console.time("b")
const result2 = minMaxSum(arr)
console.timeEnd("b")
console.log(`${result2.min} ${result2.max}`);