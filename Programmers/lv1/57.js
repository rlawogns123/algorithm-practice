// 햄버거 만들기

function solution(ingredient) {
  var answer = 0;
  const bugger = "1231";
  let data = [];
  for (let i = 0; i < ingredient.length; i++) {
    data.push(ingredient[i]);
    if (data.length >= 4) {
      const temp = data.slice(-4).join("");
      if (temp === bugger) {
        data.splice(-4);
        answer++;
      }
    }
  }
  return answer;
}
