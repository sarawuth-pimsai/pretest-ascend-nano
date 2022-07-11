# Pretest
### Question 1
#### 1. Given an array of numbers, please find all pair numbers which result in the given number.

```array: [1,2,3,4,5]
input:7
expected result >>>>>> 2+5, 3+4
```
### Answer 
```
function pair(input, arr, begin, end, result) {
  const sum = arr[begin] + arr[end];
  if (input === sum) {
    result.push([arr[begin], arr[end]]);
  }
  if (begin >= end || input <= sum) return sum;
  pair(input, arr, ++begin, end, result);
  pair(input, arr, begin, --end, result);
  return result;
}
const arr = [1, 2, 3, 4, 5];
const result = pair(7, arr, 0, arr.length - 1, []);
const output = result.map((r) => `${r[0]}+${r[1]}`).join(", ");
console.log(output);
```

### Question 2
#### 1 Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. The print the respective minimum and maximum values as a single line of two space-separated long integers.
### Answer 
```
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
console.log(`${result.min}  ${result.max}`);
```