// 과일 장수

function solution(k, m, score) {
    var answer = 0;
    score = score.sort((a, b) => a - b);
    while(score.length >= m) {
        const data = score.splice(-m);
        answer += Math.min(...data) * m
    }
    return answer;
}