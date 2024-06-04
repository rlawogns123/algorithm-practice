// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  var answer = [];
  let data = 0;
  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        data++;
        win_nums.splice(j, 1);
      }
    }
  }
  const best = lottos.filter((e) => e === 0).length + data;
  switch (best) {
    case 6:
      answer.push(1);
      break;
    case 5:
      answer.push(2);
      break;
    case 4:
      answer.push(3);
      break;
    case 3:
      answer.push(4);
      break;
    case 2:
      answer.push(5);
      break;
    default:
      answer.push(6);
      break;
  }
  switch (data) {
    case 6:
      answer.push(1);
      break;
    case 5:
      answer.push(2);
      break;
    case 4:
      answer.push(3);
      break;
    case 3:
      answer.push(4);
      break;
    case 2:
      answer.push(5);
      break;
    default:
      answer.push(6);
      break;
  }
  return answer;
}
