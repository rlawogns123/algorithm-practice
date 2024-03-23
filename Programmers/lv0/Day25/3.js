// 정사각형으로 만들기

function solution(arr) {
  var answer = [[]];
  const x = arr.length;
  const y = arr[0].length;
  if (x > y) {
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < x - y; j++) {
        arr[i].push(0);
      }
    }
  }

  if (x < y) {
    for (let i = 0; i < y - x; i++) {
      const newArr = new Array(y).fill(0);
      arr.push(newArr);
    }
  }

  answer = [...arr];
  return answer;
}
