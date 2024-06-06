// 숫자 문자열과 영단어

function solution(s) {
  var answer = "";
  const data = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < data.length; i++) {
    if (s.includes(data[i])) {
      s = s.replaceAll(data[i], i);
    }
  }
  answer = Number(s);
  return answer;
}
