function solution(array, commands) {
  var answer = [];
  for (var i = 0; i < commands.length; i++) {
    let data = array.slice(commands[i][0] - 1, commands[i][1]);

    data.sort((a, b) => a - b);

    answer.push(data[commands[i][2] - 1]);
  }
  return answer;
}
