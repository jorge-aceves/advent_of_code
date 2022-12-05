const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const solution = (input) => {
  let arr = input.split("\n");
  let sum = 0;

  arr.forEach((line) => {
    const firstHalf = line.slice(0, line.length / 2);
    const secondHalf = line.slice(line.length / 2, line.length);
    const repeated = new Set();
    for (let i =0; i<firstHalf.length; i++) {
      repeated.add(firstHalf[i]);
    }
    for (let i =0; i<secondHalf.length; i++) {
      if(repeated.has(secondHalf[i])) {
        const charCode = secondHalf[i].charCodeAt(0)
        if(charCode >= 97) {
          sum += charCode - 96;
        } else {
          sum += charCode - 64 + 26;
        }
        return;
      }
    }
  });
  console.log(sum);
}

const fileContent = readFile('./input.txt');
solution(fileContent);