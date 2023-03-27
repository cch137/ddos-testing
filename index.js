const { writeFile, mkdirSync } = require('fs');


const count = {};

const log = (status) => {
  if (count[status]) count[status]++;
  else count[status] = 1;
}

for (let i = 0; i < 8; i++) {
  setInterval(() => {
    fetch('https://www.thecodeblog.net/')
    .then(res => log(res.status))
    .catch(err => log('timeout'));
  }, 0);
}

mkdirSync('test/', { recursive: true });

setInterval(() => {
  writeFile('test/result.json', JSON.stringify(count, 0, 4), (err) => {
    if (err) console.error(err);
    else console.log('Saved:', count);
  });
}, 1000);