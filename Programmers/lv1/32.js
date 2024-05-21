// 소수 만들기

function solution(nums) {
  var answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const num = nums[i] + nums[j] + nums[k];
        for (let l = 2; l <= Math.sqrt(num); l++) {
          if (num % l === 0) {
            answer--;
            break;
          }
        }
        answer++;
      }
    }
  }
  return answer;
}
