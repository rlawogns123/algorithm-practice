// 덧칠하기

function solution(n, m, sections) {
    var answer = 0;
    var painted = 0;
    for(var section of sections) {
        if(painted < section) {
            answer++;
            painted = section + m - 1;
        }
        console.log(painted);
    }
    return answer;
}