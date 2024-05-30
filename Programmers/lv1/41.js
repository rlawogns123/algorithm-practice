// 크레인 인형뽑기 게임

function solution(board, moves) {
  var answer = 0;
  let newBoard = [];
  let stk = [];
  //newBoard
  for (let i = 0; i < board.length; i++) {
    let temp = [];
    for (let j = 0; j < board[0].length; j++) {
      if (board[j][i] !== 0) temp.push(board[j][i]);
    }
    newBoard.push(temp.reverse());
    temp = [];
  }
  console.log(newBoard);

  //moves check
  moves.forEach((num) => {
    if (newBoard[num - 1].length !== 0) {
      let temp = newBoard[num - 1].pop();
      if (stk.length === 0) stk.push(temp);
      else {
        if (stk[stk.length - 1] === temp) {
          stk.pop();
          answer += 2;
        } else {
          stk.push(temp);
        }
      }
    }
  });

  return answer;
}
