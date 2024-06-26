const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const obj = {};
    const studentObj = {};
    fs.readFile(path, 'utf-8')
      .then((data) => {
        const rows = data.split('\n');
        const values = rows.slice(1, rows.length - 1);
        console.log(`Number of students: ${values.length}`);
        const retunrValue = values.map((value) => {
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
          console.log(`Number of students in ${key}: ${value}. List: ${studentObj[key].join(', ')}`);
        }
        resolve(retunrValue);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
