const fs = require('fs');

const readFile = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

const solution = (input) => {
  let arr = input.split("\n");
  const max = 100000;
  let sum = 0;
  let dirList = [];
  const dirSize = {};

  for(let i=0; i<arr.length; i++) {
    let line = arr[i];
    if(line.startsWith("$ cd ..")) {
      dirList.pop();
    } else if(line.startsWith("$ cd")) {
      const dir = line.split("$ cd ")[1].trim();
      dirList.push(dir);
    }
    if(line.startsWith("$ ls")) {
      i++;
      do {
        let line = arr[i];
        i++;
        if(line.startsWith("dir")) {
        } else {
          const val = parseInt(line.split(" ")[0]);
          let dirName = "";
          dirList.forEach((dir,i) => {
            dirName += dir;
            if(!dirSize[dirName]) {
              dirSize[dirName] = 0;
            }
            dirSize[dirName] += val;
          });
        }
      } while(i < arr.length && !arr[i].startsWith("$"));
      i--;
    }
  }
  Object.keys(dirSize).forEach((key) => {
    if(dirSize[key] <= max) {
      sum += dirSize[key];
    }
  })

  console.log(sum);
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