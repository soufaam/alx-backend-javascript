process.stdin.setEncoding('utf8');
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data.trim()}`);
});
process.on('end', () => {
  console.log('This important software is now closing');
});
