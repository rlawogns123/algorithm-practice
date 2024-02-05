// 접미사인지 확인하기

function solution(my_string, is_suffix) {
  var answer = 0;
  let data = [];
  for (let i = -my_string.length; i <= -1; i++) {
    const str = my_string.slice(i);
    data.push(str);
  }
  if (data.includes(is_suffix)) {
    answer = 1;
  } else {
    answer = 0;
  }

  return answer;
}
