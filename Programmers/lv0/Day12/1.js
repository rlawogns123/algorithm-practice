// 리스트 자르기

function solution(n, slicer, num_list) {
  var answer = [];
  switch (n) {
    case 1:
      answer = num_list.slice(0, slicer[1] + 1);
      break;
    case 2:
      answer = num_list.slice(slicer[0]);
      break;
    case 3:
      answer = num_list.slice(slicer[0], slicer[1] + 1);
      break;
    case 4:
      answer = num_list
        .slice(slicer[0], slicer[1] + 1)
        .filter((value, idx) => idx % 2 === 0);
  }
  return answer;
}
