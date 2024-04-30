// 소수찾기

function solution(n) {
  let data = [];
  for (let i = 2; i <= n; i++) {
    data.push(i);
  }

  let primeNumber = [];
  for (let i = 2; i <= n; i++) {
    if (data[i] === 0) continue;
    primeNumber.push(i);
    data[i] = 0;

    for (let j = i * 2; j <= n; j += i) {
      if (data[j] === 0) continue;
      data[j] = 0;
    }
  }

  return primeNumber.length;
}
