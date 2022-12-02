const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const solution = (input) => {
  let arr = input.split("\n");
  let sum = 0;
  let sums = [];
  arr.forEach((line) => {
    if (line === "") {
      sums.push(sum)
      sum = 0;
      return;
    }
    sum += parseInt(line);
  });
  sums = sums.sort((a,b) => { return b - a});
  console.log(sums[0] + sums[1] + sums[2]);
}

const fileContent = readFile('./input.txt');
solution(fileContent);