// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  var answer = [];
  const wins = lottos.filter((e) => win_nums.includes(e)).length;
  const data = lottos.filter((e) => e === 0).length + wins;

  const worst = 7 - wins >= 6 ? 6 : 7 - wins;
  const best = 7 - data >= 6 ? 6 : 7 - data;
  answer = [best, worst];

  return answer;
}
