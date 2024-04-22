// 폰켓몬

function solution(nums) {
  const set = new Set(nums);
  const data = [...set];
  const n = nums.length / 2;
  const answer = data.length > n ? n : data.length;
  return answer;
}
