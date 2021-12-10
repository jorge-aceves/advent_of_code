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
values[")"] = 1,
values["]"] = 2,
values["}"] = 3,
values[">"] = 4


const solution = (input) => {
  let arr = input.split("\n");
  let sums = [];
  arr.forEach((line, x) => {
    let stack = []
    let corrupt = false
    let sum = 0
    for(let i=0; i<line.length; i++) {
      if(expected[line[i]]) {
        stack.push(expected[line[i]]);
      } else {
        let c = stack.pop();
        if(c !== line[i]) {
          corrupt = true
        }
      }
    }
    while(!corrupt && stack.length > 0) {
      let c = stack.pop();
      sum *= 5;
      sum += values[c]
    }
    if(!corrupt) sums.push(sum)
  });
  sums.sort((a, b) => a - b)
  console.log(sums[Math.floor(sums.length/2)]);
}

const fileContent = readFile('./input.txt');
solution(fileContent);