function solution(wallpaper) {
  var answer = [];
  let lux = 51,
    luy = 51;
  let rdx = 0,
    rdy = 0;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] == "#") {
        if (luy > j) luy = j;
        if (lux > i) lux = i;
        if (rdx < i) rdx = i;
        if (rdy < j) rdy = j;
      }
    }
  }
  answer = [lux, luy, rdx + 1, rdy + 1];
  return answer;
}
