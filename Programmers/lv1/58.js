// 푸드 파이트 대회

function solution(food) {
  var answer = "";
  let data = [];
  food.map((e, i) => {
    if (e > 1) {
      data.push(i.toString().repeat(Math.floor(e / 2)));
    }
  });
  answer = data.join("") + "0" + data.reverse().join("");
  return answer;
}
