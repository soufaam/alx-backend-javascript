export default function updateStudentGradeByCity(students, city, newGrade) {
  const result = students
    .filter((student) => {
      let updateStudent;
      if (student.location === city) {
        const copyStudent = student;
        updateStudent = newGrade.map((grade) => {
          if (copyStudent.id === grade.studentId) {
            copyStudent.grade = grade.grade;
          } else if (!copyStudent.grade) {
            copyStudent.grade = 'N/A';
          }
          return copyStudent;
        });
      }
      return updateStudent;
    });
  return result;
}
