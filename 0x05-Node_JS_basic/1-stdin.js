process.stdin.setEncoding('utf8');
console.log('Welcome to Holberton School, what is your name');
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('close', () => {
  console.log('This important software is now closing');
});
