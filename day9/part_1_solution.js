const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const isValid = (i, j, matrix) => {
  return i >= 0 && i < matrix.length && j >= 0 && j < matrix[i].length;
}

const directions = [[0,1], [0,-1], [1,0], [-1,0]];

const solution = (input) => {
  let arr = input.split("\n");
  arr = arr.map((e) => (e.split('').map((f) => parseInt(f))));
  let riskLevel = 0;
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr[i].length; j++) {
      const isLowest = directions.every((direction) => {
        const x = i + direction[0];
        const y = j + direction[1];
        if (isValid(x, y, arr)) {
          return arr[x][y] > arr[i][j];
        }
        return true;
      });
      if (isLowest) {
        riskLevel += arr[i][j] + 1;
      }
    }
  }
  console.log(riskLevel);
}

const fileContent = readFile('./input.txt');
solution(fileContent);