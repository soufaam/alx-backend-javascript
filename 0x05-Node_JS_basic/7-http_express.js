const express = require('express');
const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const obj = {};
    const studentObj = {};
    fs.readFile(path, 'utf-8')
      .then((data) => {
        let str = '';
        const rows = data.split('\n');
        const values = rows.slice(1, rows.length - 1);
        str += `Number of students: ${values.length}\n`;
        values.map((value) => {
          const splitValues = value.split(',');
          const key = splitValues[3];
          const studentName = splitValues[0];
          if (obj[`${key}`] !== undefined) {
            const counter = obj[`${key}`];
            const studentList = studentObj[`${key}`];
            studentList.push(studentName);
            obj[`${key}`] = counter + 1;
            studentObj[`${key}`] = studentList;
          } else {
            obj[`${key}`] = 1;
            studentObj[`${key}`] = [studentName];
          }
          return splitValues;
        });
        for (const [key, value] of Object.entries(obj)) {
          str += `Number of students in ${key}: ${value}. List: ${studentObj[key].join(', ')}\n`;
        }
        str = str.slice(0, str.length - 1);
        resolve(str);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const app = express();
app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((data) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${error.message}`);
    });
});

const port = 1245;
app.listen(port, () => {

});

module.exports = app;
