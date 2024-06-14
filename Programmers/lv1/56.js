// 옹알이 (2)

function solution(babbling) {
  var answer = 0;
  const data = ["aya", "ye", "woo", "ma"];
  for (let babble of babbling) {
    for (let str of data) {
      if (babble.includes(str.repeat(2))) {
        break;
      }
      babble = babble.split(str).join("/");
    }
    if (babble.split("/").join("") === "") {
      answer++;
    }
  }
  return answer;
}
