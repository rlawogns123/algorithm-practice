// 0 떼기

function solution(n_str) {
  var answer = "";
  let n = 1;
  for (let i = 0; i < n_str.length; i++) {
    if (n_str[i] !== "0") {
      n = i;
      break;
    }
  }
  answer += n_str.slice(n);
  return answer;
}
