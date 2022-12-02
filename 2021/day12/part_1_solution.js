const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const expected = {}
expected["("] = ")"
expected["["] = "]"
expected["{"] = "}"
expected["<"] = ">"

const values = {}
values[")"] = 3,
values["]"] = 57,
values["}"] = 1197,
values[">"] = 25137


const solution = (input) => {
  let arr = input.split("\n");
  let sum = 0;
  arr.forEach((line, x) => {
    let stack = []
    for(let i=0; i<line.length; i++) {
      if(expected[line[i]]) {
        stack.push(expected[line[i]]);
      } else {
        let c = stack.pop();
        if(c !== line[i]) {
          sum += values[line[i]];
        }
      }
    }
  });
  console.log(sum);
}

const fileContent = readFile('./input.txt');
solution(fileContent);