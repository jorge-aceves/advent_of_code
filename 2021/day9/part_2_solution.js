const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const isValid = (i, j, matrix) => {
  return i >= 0 && i < matrix.length && j >= 0 && j < matrix[i].length;
}

const directions = [[0,1], [0,-1], [1,0], [-1,0]];
const visited = {};

const solution = (input) => {
  let arr = input.split("\n");
  arr = arr.map((e) => (e.split('').map((f) => parseInt(f))));
  let basins = [];
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
        basins.push([i,j]);
      }
    }
  }
  let sizes = []
  basins.forEach((basin) => {
    visited[basin[0] + "." + basin[1]] = true
    let size = 0;
    let queue = [basin];
    while(queue.length > 0) {
      size++;
      let point = queue.shift();
      let i = point[0];
      let j = point[1];
      directions.forEach((direction) => {
        const x = i + direction[0];
        const y = j + direction[1];
        const p = x + "." + y
        if (isValid(x, y, arr) && arr[x][y] !== 9 && !visited[p]) {
          visited[p] = true;
          queue.push([x,y]);
        }
      });
    }
    sizes.push(size);
  })
  sizes.sort((a, b) => a - b)
  const l = sizes.length;
  console.log(sizes[l-1] * sizes[l-2] * sizes[l-3]);
}

const fileContent = readFile('./input.txt');
solution(fileContent);