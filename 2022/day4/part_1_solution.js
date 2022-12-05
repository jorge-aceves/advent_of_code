const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const solution = (input) => {
  let arr = input.split("\n");
  let sum = 0;

  arr.forEach((line) => {
    const left = line.split(",")[0].split("-").map((a) => parseInt(a));
    const right = line.split(",")[1].split("-").map((a) => parseInt(a));

    if(
      (left[0] >= right[0] && left[0] <= right[1]) ||
      (left[1] >= right[0] && left[1] <= right[1]) ||
      (right[0] >= left[0] && right[0] <= left[1]) ||
      (right[1] >= left[0] && right[1] <= left[1])
      ) {
      sum++;
    }
  });
  console.log(sum);
}

const fileContent = readFile('./input.txt');
solution(fileContent);