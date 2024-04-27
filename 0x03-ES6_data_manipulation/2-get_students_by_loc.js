export default function getStudentsByLocation(listOfStudents, city) {
  const listStudent = listOfStudents
    .filter((student) => student.location === city);
  return listStudent;
}
