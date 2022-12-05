const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const solution = (input) => {
  let arr = input.split("\n");
  let sum = 0;
  for (let i =0; i<arr.length; i+=3) {
      let firstLine = arr[i];
      let secondLine = arr[i+1];
      let thirdLine = arr[i+2];
      let firstSet = new Set();
      let secondSet = new Set();
      for(let j = 0; j < firstLine.length; j++) {
        firstSet.add(firstLine[j]);
      }
      for(let j = 0; j < secondLine.length; j++) {
        if(firstSet.has(secondLine[j])) {
          secondSet.add(secondLine[j]);
        }
      }
      for(let j = 0; j < thirdLine.length; j++) {
        if(secondSet.has(thirdLine[j])) {
          const charCode = thirdLine[j].charCodeAt(0)
          if(charCode >= 97) {
            sum += charCode - 96;
          } else {
            sum += charCode - 64 + 26;
          }
          break;
        }
      }
  }
  console.log(sum);
}

const fileContent = readFile('./input.txt');
solution(fileContent);