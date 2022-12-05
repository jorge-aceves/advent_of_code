const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const solution = (input) => {
  let arr = input.split("\n");
  let sum = 0;
  let index = -1;
  let i = 0;
  let x = 0;
  do {
    if (!arr[i].includes("[")) {
      index = i;
      length = arr[i].split("").filter((a) => a !== " ").length;
    }
    i++;
  } while (index == -1);

  let stacks = {};

  for (let i=0; i<length; i++)  {
    stacks[i] = [];
  }

  for (let i=index-1; i>=0; i--) {
    let line = arr[i];
    let x = 0;
    for(let j=0; j<line.length; j+=4) {
      if(line[j] === " ") {
        x++; // not in this index
        continue;
      }
      stacks[x].push(line[j+1]);
      x++;
    }
  }

  const regex = /move (.+) from (.+) to (.+)/;
  for (let i=index+2; i<arr.length; i++) {
    const res = regex.exec(arr[i]);
    const amount = parseInt(res[1]);
    const from = parseInt(res[2]) - 1;
    const to = parseInt(res[3]) - 1;
    for(let j=0; j<amount; j++) {
      const a = stacks[from].pop();
      stacks[to].push(a);
    }
  }

  let result = "";
  for (let i=0; i<length; i++) {
    result += stacks[i].pop();
  }
  console.log(result);
}

let fileName = "example";

if (process.argv[2]) {
  const maybe = process.argv[2].split("--input=");
  if(maybe.length === 2) {
    fileName = maybe[1];
  }
}

const fileContent = readFile(`./${fileName}.txt`);
solution(fileContent);