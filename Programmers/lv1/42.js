// 두 개 뽑아서 더하기

function solution(numbers) {
  var answer = [];
  let data = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (i === j) {
        continue;
      } else {
        let sum = numbers[i] + numbers[j];
        data.push(sum);
      }
    }
  }
  const set = new Set(data);
  answer = [...set].sort((a, b) => a - b);
  return answer;
}
