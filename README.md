# Pretest
### Question 1
#### 1. Given an array of numbers, please find all pair numbers which result in the given number.

```array: [1,2,3,4,5]
input:7
expected result >>>>>> 2+5, 3+4
```
### Answer 
```
const pair = (array, sum) => {
  let result = []
  const data = transData(array)
  for(let i = 0; i < array.length; i++) {
    const key = sum - array[i]
    if(data[key]) result.push([array[i], key]) 
  }
  return result
}
const result = pair(arr, 7);
const output = result.map((r) => `${r[0]}+${r[1]}`).join(", ");
console.log(output);
```

### Question 2
#### 1 Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. The print the respective minimum and maximum values as a single line of two space-separated long integers.
### Answer 
```
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
const arr = [1, 3, 5, 7, 9];
const result = minMaxSum(arr)
console.log(`${result.min} ${result.max}`);
```