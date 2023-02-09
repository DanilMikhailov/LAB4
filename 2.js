const get = (arr, i, defaultvalue = null) => {
  if (i >= 0 && i < arr.length) {
    return arr[i];
  }

  else {
    return defaultvalue;
  }
}
let a = ["moscow", "london", "berlin", "porto"];
console.log(get(a, 1));
console.log(get(a, 4));
console.log(get(a, 10, 'paris'));
console.log(get(a, -1, 'oops'));
export default get;