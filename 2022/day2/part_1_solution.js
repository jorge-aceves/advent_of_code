const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const solution = (input) => {
  let arr = input.split("\n");
  let sum = 0;
  const pointMap = {
    "X": 1,
    "Y": 2,
    "Z": 3
  };
  const beats = {
    "X": "C",
    "Y": "A",
    "Z": "B"
  }
  const ties = {
    "X": "A",
    "Y": "B",
    "Z": "C",
  }
  arr.forEach((line) => {
    let choice = line.split(" ");
    let points = pointMap[choice[1]];
    if(beats[choice[1]] === choice[0]) {
      points += 6;
    } else if(ties[choice[1]] === choice[0]) {
      points += 3;
    }
    sum += points;
  });
  console.log(sum);
}

const fileContent = readFile('./input.txt');
solution(fileContent);