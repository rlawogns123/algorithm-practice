const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const N = Number(inputData[0]);
let garos = [];
let seros = [];

for (let i = 1; i <= N; i++) {
  let [garo, sero] = inputData[i].split(" ").map(Number);
  garos.push(garo);
  seros.push(sero);
}

const garoMax = Math.max(...garos);
const garoMin = Math.min(...garos);
const seroMax = Math.max(...seros);
const seroMin = Math.min(...seros);

console.log((garoMax - garoMin) * (seroMax - seroMin));
