// [1차] 비밀지도

function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const a = Number(arr1[i].toString(2));
    const b = Number(arr2[i].toString(2));
    let data = String(a + b).padStart(arr1.length, "0");
    data = data.replace(/2/g, 1);
    let map = "";
    for (let j = 0; j < data.length; j++) {
      if (data[j] === "1") {
        map += "#";
      } else {
        map += " ";
      }
    }
    answer.push(map);
  }
  return answer;
}
