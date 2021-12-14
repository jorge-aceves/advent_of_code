const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const isValid = (i, j, matrix) => {
  return i >= 0 && i < matrix.length && j >= 0 && j < matrix[i].length;
}

const directions = [[0,1], [0,-1], [1,0], [-1,0], [-1,-1], [1,1], [-1,1], [1,-1]];

const solution = (input) => {
  let arr = input.split("\n").map((e)=> e.split(''));
  let sum = 0;
  for (let n=0; n<100; n++) {
    let queue = [];
    let flashed = {};
    for(let i=0; i<arr.length; i++) {
      for(let j=0; j<arr[i].length; j++) {
        arr[i][j]++;
        if(arr[i][j] > 9) {
          sum++;
          queue.push([i,j]);
          flashed[`${i},${j}`] = true
          arr[i][j] = 0;
        }
      }
    }
    while(queue.length > 0) {
      let element = queue.shift();
      directions.forEach((dir) => {
        let x = element[0] + dir[0];
        let y = element[1] + dir[1];
        if(isValid(x,y,arr) && !flashed[`${x},${y}`]) {
          arr[x][y]++;
          if(arr[x][y] > 9) {
            sum++;
            queue.push([x,y]);
            flashed[`${x},${y}`] = true
            arr[x][y] = 0;
          }
        }
      });
    }
  }
  console.log(sum);
}

const fileContent = readFile('./input.txt');
solution(fileContent);