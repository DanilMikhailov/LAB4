const calcAVG = (arr) => {
  let result = 0;
  if (arr.length < 1) {
    return null;
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      result = result + arr[i];
    }
    return result / arr.length;
  }
}
const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
console.log(calcAVG(temperatures1));
const temperatures2 = [36, 37.4, 39, 41, 36.6];
console.log(calcAVG(temperatures2));
export default calcAVG;