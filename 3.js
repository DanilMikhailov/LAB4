const addPrefix = (arr, prefix) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = prefix + " " + arr[i];
  }
  return result;
}
let a = ["John", "Smith", "Karl"];
console.log(addPrefix(a, "Mr"));
export default addPrefix;