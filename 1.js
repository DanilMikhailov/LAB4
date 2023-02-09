const swap = (arr) => {
  let i = arr.length - 1;
  let result = [];
  if (i < 1) {
    return arr;
  }
  result = arr[0];
  arr[0] = arr[i];
  arr[i] = result;
  return arr;
}

let a = ["one", "two", "three"];
console.log(swap(a));
export default swap;