// 문자열이 몇 번 등장하는지 세기

function solution(myString, pat) {
  let cnt = 0;
  let idx = myString.indexOf(pat);
  while (idx !== -1) {
    cnt++;
    idx = myString.indexOf(pat, idx + 1);
  }
  return cnt;
}
