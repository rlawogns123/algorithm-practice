// 접두사인지 확인하기

function solution(my_string, is_prefix) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i < my_string.length; i++) {
    const str = my_string.slice(0, i + 1);
    arr.push(str);
    if (arr.includes(is_prefix)) {
      answer = 1;
    }
  }
  return answer;
}
