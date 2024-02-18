// 홀수 vs 짝수

function solution(num_list) {
  var answer = 0;
  let odd_number_sum = 0;
  let even_number_sum = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 === 0) {
      even_number_sum += num_list[i];
    } else {
      odd_number_sum += num_list[i];
    }
  }
  return odd_number_sum > even_number_sum ? odd_number_sum : even_number_sum;
}
