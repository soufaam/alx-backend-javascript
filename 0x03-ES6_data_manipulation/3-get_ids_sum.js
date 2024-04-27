export default function getStudentIdsSum(listOfStudents) {
  const sum = listOfStudents
    .reduce((accumulator, currentVlaue) => accumulator + currentVlaue.id, 0);
  return sum;
}
