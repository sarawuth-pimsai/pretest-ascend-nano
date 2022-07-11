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
