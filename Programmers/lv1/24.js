// 최대공약수와 최소공배수

function solution(n, m) {
  var answer = [];
  let gcd = 1;
  let lcm = Math.max(n, m);
  // 최대공약수
  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  // 최소공배수
  while (lcm % n !== 0 || lcm % m !== 0) {
    lcm++;
  }

  answer.push(gcd);
  answer.push(lcm);
  return answer;
}
