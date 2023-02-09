const buildDefinitionList = (arr) => {
  let result = "";
  let htm = "<dl>";
  if (arr.length < 1) {
    return null;
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      result += htm + "<dt>" + arr[i][0] + "</dt>" + "<dd>" + arr[i][1] + "</dd>" + "</dl>" + "\n";
    }
  }
  return result;
}
let a = [["Блямда", "Выпуклость,утолщение на поверхности чего либо"], ["Бобр", "Животное из отряда грызунов"]];
console.log(buildDefinitionList(a));
export default buildDefinitionList;