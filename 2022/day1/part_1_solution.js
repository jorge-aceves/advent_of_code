const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const solution = (input) => {
  let arr = input.split("\n");
  let max = 0;
  let sum = 0;
  arr.forEach((line) => {
    if (line === "") {
      max = Math.max(sum, max);
      sum = 0;
      return;
    }
    sum += parseInt(line);
  });
  console.log(max);
}

const fileContent = readFile('./input.txt');
solution(fileContent);