const calculateSum = (arr) => {
  let result = 0;
  if (arr.length < 1) {
    return null;
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 3 === 0) {
        result = result + arr[i];
      }
    }
    return result;
  }
}
let a = [8, 9, 21, 19, 18, 22, 71];
console.log(calculateSum(a));
let a1 = [2, 0, 17, 3, 9, 15, 4];
console.log(calculateSum(a1));
export default calculateSum;
