// 1로 만들기

function solution(num_list) {
  var answer = 0;
  for (let i of num_list) {
    let cnt = 0;
    while (i !== 1) {
      if (i % 2 === 0) {
        i = i / 2;
      } else {
        i = (i - 1) / 2;
      }
      cnt++;
    }
    answer += cnt;
  }
  return answer;
}
