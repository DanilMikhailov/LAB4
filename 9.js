const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
const normalize = (lesson) => {
  let result = "";
  lesson.name = capitalize(lesson.name);
  lesson.description = lesson.description.toLowerCase();
  return lesson;
}
let lesson = {
  name: "деструКТУРИЗАЦИЯ",
  description: "каК удивить друзей"
};
console.log(normalize(lesson));
export default capitalize;