// 나머지가 1이 되는 수 찾기

function solution(n) {
    var answer = 0;
    const data = [];
    for(let i = 1; i < n; i++) {
        if(n % i === 1) {
            data.push(i);
        }
    }
    answer = Math.min(...data);
    return answer;
}