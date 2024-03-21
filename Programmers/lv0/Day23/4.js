// 주사위 게임 1

function solution(a, b) {
  if (a % 2 !== 0 && b % 2 !== 0) {
    return a * a + b * b;
  }

  if (a % 2 === 0 && b % 2 === 0) {
    return Math.abs(a - b);
  }
  return 2 * (a + b);
}
