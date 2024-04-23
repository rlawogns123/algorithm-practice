// 가운데 글자 가져오기

function solution(s) {
  var answer = "";
  let data = [...s];
  const n =
    s.length % 2 === 1 ? parseInt(s.length / 2) : parseInt(s.length / 2 - 1);
  for (let i = 0; i < n; i++) {
    data.pop();
    data.shift();
  }

  answer = data.join("");
  return answer;
}
