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
console.time("a")
const result = pair(7, arr, 0, arr.length - 1, []);
console.timeEnd("a")
const output = result.map((r) => `${r[0]}+${r[1]}`).join(", ");
console.log(output);

const transData = (array) => {
  let result = {}
  for(let i = 0; i<array.length; i++) {
    const key = array[i]
    if(!result[key]) {
      result[key] = array[i]
    } else {
      result[key].push(array[i])
    }
  }
  return result
}

const pair2 = (array, sum) => {
  let result = []
  const data = transData(array)
  for(let i = 0; i < array.length; i++) {
    const key = sum - array[i]
    if(data[key]) result.push([array[i], key]) 
  }
  return result
}
console.time("b")
const result2 = pair2(arr, 7);
console.timeEnd("b")
const output2 = result.map((r) => `${r[0]}+${r[1]}`).join(", ");
console.log(output2);