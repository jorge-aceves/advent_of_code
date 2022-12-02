const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const solution = (input) => {
  let arr = input.split("\n");
  let sum = 0;
  const scoreMap = {
    "X": 0,
    "Y": 3,
    "Z": 6
  };
  const pointMap = {
    "X": 1,
    "Y": 2,
    "Z": 3
  };
  const beats = {
    "A": "Y",
    "B": "Z",
    "C": "X"
  }
  const loses = {
    "A": "Z",
    "B": "X",
    "C": "Y"
  }
  const ties = {
    "A": "X",
    "B": "Y",
    "C": "Z",
  }
  arr.forEach((line) => {
    let choice = line.split(" ");
    let points = scoreMap[choice[1]];
    if(choice[1] === "Y") {
      points += pointMap[ties[choice[0]]];
    } else if (choice[1] === "X") {
      points += pointMap[loses[choice[0]]];
    } else {
      points += pointMap[beats[choice[0]]];
    }
    sum += points;
  });
  console.log(sum);
}

const fileContent = readFile('./input.txt');
solution(fileContent);