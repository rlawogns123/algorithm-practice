// 추억 점수

function solution(name, yearning, photo) {
    var answer = [];
    let data = [];
    for(let i = 0; i < name.length; i++) {
        data.push([name[i], yearning[i]]);
    }
    
    for(let i = 0; i < photo.length; i++) {
        let score = 0;
        for(let j = 0; j < photo[i].length; j++) {
            for(let k = 0; k < data.length; k++) {
                if(photo[i][j] === data[k][0]) {
                    score += data[k][1];
                }
            }
        }
        answer.push(score);
    }
    return answer;
}