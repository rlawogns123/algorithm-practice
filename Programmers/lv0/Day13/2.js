// 순서 바꾸기

function solution(num_list, n) {
  var answer = [];
  const prev = num_list.slice(n);
  const next = num_list.slice(0, n);
  answer = prev.concat(next);
  return answer;
}
