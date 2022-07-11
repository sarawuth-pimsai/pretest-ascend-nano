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
const result = miniMaxSum(arr, 0, 0);
console.log(`${result.min} ${result.max}`);
