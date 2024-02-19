// 조건에 맞게 수열 변환하기 2

function solution(arr) {
  var answer = 0;
  let before = [];

  while (!arr.every((e, i) => e === before[i])) {
    before = [...arr];
    arr = arr.map((e) => {
      if (e >= 50 && e % 2 === 0) return e / 2;
      if (e < 50 && e % 2 === 1) return e * 2 + 1;
      return e;
    });
    answer++;
  }
  return answer - 1;
}
