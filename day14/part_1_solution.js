const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const solution = (input) => {
  let arr = input.split("\n");
  let str = arr[0];
  let combos = arr.slice(2);
  let changes = {};
  combos.forEach((combo) => {
    let split = combo.split(" -> ");
    changes[split[0]] = split[1];
  });
  for (let n=0; n<40; n++) {
    let newString = str[0];
    for(let i=1; i<str.length; i++) {
      let combo = str[i-1] + str[i];
      newString += changes[combo] + str[i];
    }
    str = newString;
  }
  let frequency = {};
  let max = 0;
  for(let i=0; i<str.length;i++) {
    if(!frequency[str[i]]) {
      frequency[str[i]] = 0;
    }
    frequency[str[i]]++;
    max = Math.max(frequency[str[i]], max);
  }
  let min = max;
  Object.values(frequency).forEach((val) => min = Math.min(min, val));
  console.log(max-min);
}

const fileContent = readFile('./input.txt');
solution(fileContent);