// 모의고사

function solution(answers) {
  var answer = [];
  let a = [];
  const a_data = [1, 2, 3, 4, 5];
  let a_temp = 0;
  let a_cnt = 0;
  let b = [];
  const b_data = [1, 3, 4, 5];
  let b_temp = 0;
  let b_cnt = 0;
  let c = [];
  const c_data = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let c_temp = 0;
  let c_cnt = 0;
  for (let i = 0; i < answers.length; i++) {
    if (a_temp > 4) {
      a_temp = 0;
    }
    a.push(a_data[a_temp]);
    a_temp++;

    if (b_temp > 3) {
      b_temp = 0;
    }
    if (i % 2 === 0) {
      b.push(2);
    } else {
      b.push(b_data[b_temp]);
      b_temp++;
    }

    if (c_temp > 9) {
      c_temp = 0;
    }
    c.push(c_data[c_temp]);
    c_temp++;

    if (answers[i] === a[i]) {
      a_cnt++;
    }

    if (answers[i] === b[i]) {
      b_cnt++;
    }

    if (answers[i] === c[i]) {
      c_cnt++;
    }
  }

  const max = Math.max(a_cnt, b_cnt, c_cnt);
  if (max === a_cnt) {
    answer.push(1);
  }

  if (max === b_cnt) {
    answer.push(2);
  }

  if (max === c_cnt) {
    answer.push(3);
  }
  return answer;
}
