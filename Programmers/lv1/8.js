// 문자열 내 p와 y의 개수

function solution(s) {
  const data = s.toUpperCase();
  let p = 0;
  let y = 0;
  for (str of data) {
    switch (str) {
      case "P":
        p += 1;
        break;
      case "Y":
        y += 1;
        break;
    }
  }

  return p === y ? true : false;
}
