const makeCensored = (text, censored) => {
  let result = "";
  let censore = "$#%!";
  let textArr = text.split(" ");
  for (let i = 0; i < textArr.length; i++) {
    if (censored.includes(textArr[i])) {
      textArr[i] = censore;
    }
    result += textArr[i] + " "
  }
  return result;
}
let sentence = "When you play the game of thrones,you win or you die";
console.log(makeCensored(sentence, "die", "play"));
let sentence2 = "chicken chicken? chicken! chicken";
console.log(makeCensored(sentence2, "chicken"));
export default makeCensored;