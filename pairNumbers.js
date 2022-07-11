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
