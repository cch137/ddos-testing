const { writeFile, mkdirSync } = require('fs');


const count = {};

const log = (status) => {
  if (count[status]) count[status]++;
  else count[status] = 1;
}

for (let i = 0; i < 8; i++) {
  setInterval(() => {
    fetch('https://imagedelivery.net/nMLJ6iwvB35QDIOTiRU0QQ/45908993-a9fb-4b40-65b8-000a6eb54100/032')
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