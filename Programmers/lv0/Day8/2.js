// 주사위 게임 3

function solution(a, b, c, d) {
  const maxNum = Math.max(a, b, c, d);
  const minNum = Math.min(a, b, c, d);
  let maxCount = 0;
  let minCount = 0;
  let dice = [a, b, c, d];

  for (let i of dice) {
    if (i === maxNum) {
      maxCount++;
    } else if (i === minNum) {
      minCount++;
    }
  }

  if (maxCount === 4) {
    return 1111 * maxNum;
  }

  if (maxCount === 3) {
    return Math.pow(10 * maxNum + minNum, 2);
  }
  if (minCount === 3) {
    return Math.pow(10 * minNum + maxNum, 2);
  }

  if (maxCount === 2 && minCount === 2) {
    return (maxNum + minNum) * (maxNum - minNum);
  }

  if (a === b) {
    return c * d;
  }
  if (a === d) {
    return b * c;
  }
  if (a === c) {
    return b * d;
  }
  if (b === c) {
    return a * d;
  }
  if (b === d) {
    return a * c;
  }
  if (c === d) {
    return a * b;
  }

  return minNum;
}
