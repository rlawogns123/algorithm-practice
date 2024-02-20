// 배열에서 문자열 대소문자 변환하기

function solution(strArr) {
  var answer = [];
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 === 1) {
      strArr[i] = strArr[i].toUpperCase();
    } else {
      strArr[i] = strArr[i].toLowerCase();
    }
  }
  answer = [...strArr];
  return answer;
}
