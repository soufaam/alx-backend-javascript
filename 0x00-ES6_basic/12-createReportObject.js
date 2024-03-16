export default function createReportObject(employeesList) {
  const report = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(numberofkey) {
      return Object.keys(numberofkey).length;
    },
  };
  return report;
}
