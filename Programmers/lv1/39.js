// 체육복

function solution(n, lost, reserve) {
  var answer = 0;
  let reserveSort = reserve
    .filter((e) => !lost.includes(e))
    .sort((a, b) => a - b);
  let lostSort = lost.filter((e) => !reserve.includes(e)).sort((a, b) => a - b);
  let cnt = n - lostSort.length;
  for (let i = 0; i < lostSort.length; i++) {
    for (let j = 0; j < reserveSort.length; j++) {
      if (
        lostSort[i] - 1 === reserveSort[j] ||
        lostSort[i] + 1 === reserveSort[j]
      ) {
        cnt++;
        reserveSort.splice(j, 1);
      }
    }
  }
  answer = cnt;
  return answer;
}
