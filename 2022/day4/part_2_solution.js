const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const solution = (input) => {
  let arr = input.split("\n");
  let sum = 0;

  arr.forEach((line) => {

  });
  console.log(sum);
}

const fileContent = readFile('./input.txt');
solution(fileContent);