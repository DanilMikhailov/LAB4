const reverse = (arr) => {
  let result = [];
  let b = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[b] = arr[i];
    b++;
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = result[i];
  }
  return arr;
}
let a = ["John", "Smith", "Karl"];
console.log(reverse(a));
export default reverse;