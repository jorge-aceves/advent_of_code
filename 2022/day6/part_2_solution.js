const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const solution = (input) => {
  let arr = input.split("");
  for(let i=13; i<arr.length; i++) {
    let s = new Set();
    for (let j=i; j>=i-13; j--) {
      s.add(arr[j]);
    }
    if (s.size === 14) {
      console.log(i+1);
      break;
    }
  }
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