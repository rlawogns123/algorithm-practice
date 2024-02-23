// 세 개의 구분자

function solution(myStr) {
  var answer = [];
  for (let i = 97; i < 100; i++) {
    myStr = myStr.split(String.fromCharCode(i)).join(".");
  }
  answer = myStr.split(".").filter((e) => e !== "");
  return answer.length === 0 ? ["EMPTY"] : answer;
}
