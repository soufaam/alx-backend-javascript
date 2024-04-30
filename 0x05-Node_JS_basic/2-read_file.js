const fs = require('fs');

function countStudents(path) {
  if (fs.existsSync(path)) {
    const obj = {};
    const studentObj = {};
    const csvData = fs.readFileSync(path, 'utf-8');
    const rows = csvData.split('\n');
    const values = rows.slice(1, rows.length - 1);
    console.log(`Number of students: ${values.length}`);
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
      console.log(`Number of students in ${key}: ${value}. List: ${studentObj[key].join(', ')}`);
    }
  } else {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
